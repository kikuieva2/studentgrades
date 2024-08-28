const grades = [];
for(let i=0; i<10; i++){
const newGrade = Math.floor(Math.random()*12)+100;
grades.push(newGrade);
};
console.log(grades);

const total = grades.reduce((total,sum)=>total+sum,0);
const average = total / grades.length;
console.log(average);

const maxGrade = Math.max(...grades);
console.log(maxGrade);

const minGrade = Math.min(...grades);
console.log(minGrade);

const filteredGrades = grades.filter(grade =>grade >=60);
const positiveGrades = filteredGrades.length;
console.log(`Positive grades: ${positiveGrades}`);

const negativeFilteredNumbers = grades.filter(grade =>grade <= 60);
const negativeGrades = negativeFilteredNumbers.length;
console.log(`Negative marks: ${negativeGrades}`);

const letterGrade = grades.map(grades=>{
    if(grades >=80 && grades <=100){
        return 'A';
    }else if(grades >=60 && grades <=79){
        return 'B';
    }else if(grades>=40 && grades <=59){
        return 'C';
    } else if(grades >= 20 && grades<= 39){
        return 'D';
    }else{
        return 'E';
    }
});
console.log(letterGrade);





