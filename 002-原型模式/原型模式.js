class Employee{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    say(){
        console.log(this.name+"-"+this.age)  //这行是关键
    }
}

var employee1 = new Employee("kerwin",100)

console.log(employee1)
employee1.say()