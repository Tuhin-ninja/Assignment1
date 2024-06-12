{

interface Student{
    name : string; 
    age : number; 
    grades : number[];
}



const student : Student = {
    name : 'Bob',
    age : 17,
    grades : [75,80,82,88,90]
}


const calculateAverageGrade = (st : Student) : number =>{
    const totalMarks = st?.grades.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue
    },0) 

    return totalMarks/st?.grades.length
}



console.log(calculateAverageGrade(student))




}