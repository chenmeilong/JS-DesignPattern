// var employee1 = {
//     name:"kerwin",
//     age:100
// }

// var employee2 = {
//     name:"tiechui",
//     age:18
// }
//提高代码的复用性
function Employee(name,age){
    this.name = name
    this.age = age

    this.say = function(){
        console.log(this.name+"-",this.age)
    }
}

var employee1 = new Employee("kerwin",100)
var employee2 = new Employee("tiechui",18)
// employee1.say()

console.log(employee1,employee2)

employee1.say()
employee2.say()