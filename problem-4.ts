{



type GenericArray<T> = Array<T>


function reverseArray<Type>(array: Type[]) : Type [] {
    let result : Type[] = []
    for(var k : number = array.length - 1; k >= 0; k--){
        result.push(array[k])
    }


    return result
}


console.log(reverseArray(['apple','banana','cherry']))
console.log(reverseArray([10,20,30]))











}