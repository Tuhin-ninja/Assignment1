{



const filterEvenNumbers = (arrayOfNumbers: number[]) : number[] =>{
    const result = arrayOfNumbers.filter(element => element%2===0)
    return result
}    


console.log(filterEvenNumbers([1,2,3,4,5,6])
)








}