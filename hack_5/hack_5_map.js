/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let num = []

let n = 7;

for(n; n >=1; n--){
    num.push(n)

}

num.map(n => {
    if(n % 2 == 1){
        result.push(n)
        
    }

})


//export result
module.exports = result;