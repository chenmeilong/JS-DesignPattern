class User{
    constructor(name,role,pages){
        this.name = name
        this.role = role
        this.pages = pages
    }
    welcome(){
        console.log("欢迎回来",this.name)
    }
    dataShow(){
        //abstract
        throw new Error("抽象方法需要被实现")
    }
}

class SuperAdmin extends User{
    constructor(name){
        super(name, "superadmin", ["home", "user-manage", "right-manage", "news-manage"])
    }
    dataShow(){
        //abstract
        console.log('superadmin-datashow')
    }
    addRight(){

    }
    addUser(){

    }
}

class Admin extends User{
    constructor(name){
        super(name, "admin", ["home", "user-manage",  "news-manage"])
    }
    dataShow(){
        //abstract
        console.log('admin-datashow')
    }
    addUser(){
        
    }
}
class Editor extends User{
    constructor(name){
        super(name, "editor", ["home",  "news-manage"])
    }
    dataShow(){
        //abstract
        console.log('editor-datashow')
    }
}

function getAbstractUserFactory(role){
    switch(role){
        case "superadmin":
            return SuperAdmin
        case "admin":
            return Admin
        case "editor":
            return Editor
        default:
            throw new Error("参数错误")
    }
}

let UserClass = getAbstractUserFactory("superadmin")
// console.log(userClass)
let user = new UserClass("kerwin")
// user.welcome()