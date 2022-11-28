/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

arr.shift()
arr.pop()


let p = arr.map(p=> p[0] + p[1].replace('a','@') + p.slice(2) )
    
let nArray = p

nArray.splice(2,1,"QUX")

result = nArray


//export result
module.exports = result;