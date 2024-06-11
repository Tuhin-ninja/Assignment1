{


const findLargestNumber = (arrayOfNums : number[]) : number => {
    var max = arrayOfNums[0]
    arrayOfNums.forEach(element => {
        if(element > max) max = element
    });

    return max; 
}    




console.log(findLargestNumber([10,5,8,20,3]))














}