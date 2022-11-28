/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

numberArray [0] = 'one';
numberArray [2] = 'three';
numberArray [4] = 'five';

numberArray.push("h@ck")
numberArray.unshift("h@ck")       

stringArray.push("h@ck")

stringArray[0] = "f00"
stringArray[1] = "Bar"
stringArray[2] = "b@z"
stringArray[3] = "quX"
stringArray[4] = "3ch0"

let n = numberArray.concat(stringArray);
result = n


//export result
module.exports = result;