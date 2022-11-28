/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let num = []

let n = 0;

for(n; n <=7; n++){
    num.push(n)

}

num.map(n => {
    if(n % 2 == 1){
        result.push(n)
    }

})


//export result
module.exports = result;