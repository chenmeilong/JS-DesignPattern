class Subject{
    constructor(){
        this.observers = []
    }
    add(observer){
        this.observers.push(observer)
    }
    remove(observer){
        this.observers = this.observers.filter(item=>item!==observer)
    }
    notify(){
        this.observers.forEach(item=>{
            // console.log(item)
            item.update()
        })
    }
}

class Observer{
    constructor(name){
        this.name = name
    }
    update(){
        console.log("update",this.name)
    }
}

const subject = new Subject()
const observer1 = new Observer("kerwin")
const observer2 = new Observer("tiechui")

subject.add(observer1)
subject.add(observer2)

setTimeout(()=>{
    subject.remove(observer2)
},1000)

setTimeout(()=>{
    subject.notify()
},2000)