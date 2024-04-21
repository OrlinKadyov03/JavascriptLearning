
function sumNumbers(array){
   let total = 0
   for(const item of array){
    if(Array.isArray(item)){
            total += sumNumbers(item)
    }else{
        total += item
    }
   }
   return total
}

const array1 = [1,[2],3,4,[[[[[5]]]]]]


const result = sumNumbers(array1)
console.log(result)