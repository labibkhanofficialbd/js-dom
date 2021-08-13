
const result = avg([57, 60, 60, 55]);
console.log(result);

function avg(marks){
    let total = 0;
    for(let i=0;i < marks.length;i++){
       total += marks[i];
      
    }
    return total / marks.length;
}