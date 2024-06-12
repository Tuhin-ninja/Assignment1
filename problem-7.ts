{

const logString = (msg : unknown) : void =>{
    if(typeof msg === 'string') console.log(msg)
    else console.log(`Input is not a string`)
}



logString('Hello, TypeScript!') 
logString(42)



















}