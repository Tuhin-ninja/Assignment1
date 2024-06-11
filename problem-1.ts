


const repeatString = (str : string, num : number) : string => {
    var result : string = '' 
    for(var i=0;i<num;i++) {
        result = result.concat(str)
    }

    return result 
}


console.log(repeatString('Hello!',3))