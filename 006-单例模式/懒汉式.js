class LazySingleton {
    constructor() {
      // 构造函数代码
    }
    static getInstance() {
      if (!LazySingleton.instance) {
        LazySingleton.instance = new LazySingleton();
      }
      return LazySingleton.instance;
    }
  }
  
// 使用方法
const obj1 = LazySingleton.getInstance();
const obj2 = LazySingleton.getInstance();
console.log(obj1 === obj2); // true，说明两个对象是同一个实例


//另一种方式创建
class Singleton{
    constructor(name,age){
        if(!Singleton.instance){
            this.name = name
            this.age =age 
            Singleton.instance = this
        }
        return Singleton.instance
    }
}
console.log(new Singleton("kerwin",100) === new Singleton("xiaoming",18) ); //true


//懒汉式 闭包形式实现
// var Singleton  = (function(){
//     var instance 
//     function User(name,age){
//         this.name = name
//         this.age = age
//     }

//     return function(name,age){
//         if(!instance){
//             //创建实例
//             instance = new User(name,age)
//         }
//         return instance
//     }
// })()
 