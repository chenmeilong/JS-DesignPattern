let strategry = {
    'A':(salary)=>{
        return salary*4
    },
    "B":(salary)=>{
        return salary*3
    },
    "C":(salary)=>{
        return salary*2
    }
}

 function calBonus(level,salary){
     return strategry[level](salary)
 }

console.log( calBonus("A",10000));
console.log( calBonus("C",8000));