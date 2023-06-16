Function.prototype.before= function(beforeFn){
    var _this = this
    return function(){
        //先进行前置函数调用
        beforeFn.apply(this,arguments)
        //执行原来的函数
        return _this.apply(this,arguments)  //返回了this 其中的this指向test
    }
}

Function.prototype.after= function(afterFn){
    var _this = this
    return function(){
        var result = _this.apply(this,arguments)
        //先进行前置函数调用
        afterFn.apply(this,arguments)
        //执行原来的函数
        return result
    }
}

function test(){
   console.log("1111111")
   console.log(arguments);  //伪数组
   return 111111
}

// test  = new Function()
var test1 = test.before(function(){
    console.log("000000")   
    console.log(arguments);  
}).after(function(){
   console.log("222222")
   console.log(arguments);  
})

console.log(test1('1','2'));//注意这里的括号