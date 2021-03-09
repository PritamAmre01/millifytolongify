" # millify & longify numbers" 

It converts numbers to long form and vice versa.. It includes values till K,M,B,T,Q.

Use Plugin as following:

Intall package:

npm i millifytolongify

Import package where numbers needs to be converted:

Import { millifytolongify } from './millifytolongify'

To conver number to comma separated value

millifytolongify.convertToLongForm('2k');
//'2,000.00'

millifytolongify.convertToMillify(2000.00);
//'2K'
