import {calculate} from './cost-calculator.js';

const mode = process.argv[2];
const quantity = process.argv[3];
const price = process.argv[4];
const province = process.argv[5];

if(mode.toLowerCase().trim()==="run"){
    calculate(quantity, price, province);
}
