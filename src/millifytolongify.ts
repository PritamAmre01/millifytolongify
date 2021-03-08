export function convertToLongForm(value: any) {
    let amtSeparator = '';
    let fullNumber: number = 0;

    value = value.split(',').join('');

    value = value.toUpperCase();

    if (value.includes('K')) {
        amtSeparator = 'K';
        fullNumber = parseFloat(value.split(amtSeparator)[0]) * 1000;
    } else if (value.includes('M')) {
        amtSeparator = 'M';
        fullNumber = parseFloat(value.split(amtSeparator)[0]) * 1000000;
    } else if (value.includes('B')) {
        amtSeparator = 'B';
        fullNumber = parseFloat(value.split(amtSeparator)[0]) * 1000000000;
    }

    if (fullNumber === 0) {
        return numberWithCommas(value);
    } else {
        return numberWithCommas(fullNumber);
    }
}

export function numberWithCommas(value: any) {
    return Number(parseFloat(value).toFixed(2)).toLocaleString('en', {
        minimumFractionDigits: 2
    });
}

export function convertToMillify(value: number, args?: any): any {
    if (isNaN(value)) { return null; }
    if (value === null) { return null; }
    if (value === 0) { return '0'; }

    let abs = Math.abs(value);

    const rounder = Math.pow(10, 1);

    const isNegative = value < 0;

    let key = '';

    const powers = [
        { key: 'Q', value: Math.pow(10, 15) },
        { key: 'T', value: Math.pow(10, 12) },
        { key: 'B', value: Math.pow(10, 9) },
        { key: 'M', value: Math.pow(10, 6) },
        { key: 'K', value: 1000 },
    ];

    for (const i of powers) {
        let reduced = abs / i.value;
        reduced = Math.round(reduced * rounder) / rounder;
        if (reduced >= 1) {
            abs = reduced;
            key = i.key;
            break;
        }
    }
    return (isNegative ? '-' : '') + abs + key;
}