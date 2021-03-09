# millifytolongify
Converts long `numbers` into pretty, human-readable `strings` and vice versa.

#### Use convertToMillify method 
Before :unamused: | After :tada:
--- | ---
`2000` | `'2K'`
`2000000` | `'2M'`
`2000000000` | `'2B'`
`2000000000000` | `'2T'`
`2000000000000000` | `'2Q'`

#### Use convertToLongForm method 
Before :unamused: | After :tada:
--- | ---
`'2K'`| `2,000.00`
`'2M'` | `2,000,000.00`
`'2B'` | `2,000,000,000.00`
`'2T'` | `2,000,000,000,000.00`
`'2Q'` | `2,000,000,000,000,000.00`


## Install

Get it on [npm](https://www.npmjs.com/package/millifytolongify):

```bash
npm install millifytolongify
```
## Usage

Import package where numbers needs to be converted:

```bash
Import { millifytolongify } from './millifytolongify'

#### To conver numbers with short form to comma separated value in long form

millifytolongify.convertToLongForm('2k');
//'2,000.00'

####  To millify numbers
millifytolongify.convertToMillify(2000.00); 
//'2K'

```

## Author

![](image.jpg)
