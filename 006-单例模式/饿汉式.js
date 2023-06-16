//饿汉式  看Java改写
class EagerSingleton {
    constructor() {
      console.log('构造器被调用了');
    }
    static instance = new EagerSingleton()
  
    static getInstance() {
      return EagerSingleton.instance;
    }
  }
  
// 使用方法
const obj1 = EagerSingleton.getInstance();
const obj2 = EagerSingleton.getInstance();
console.log(obj1 === obj2); // true，说明两个对象是同一个实例