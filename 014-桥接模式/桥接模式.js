//举例 发动机与平台版本对应
function Aodi1(engine){
    this.engine = engine
}
Aodi1.prototype.platform = function(){
    console.log("aodi1 平台")
}
Aodi1.prototype.loadEngine = function(){
    this.engine.run()
}

function Aodi2(engine){
    this.engine = engine
}
Aodi2.prototype.platform = function(){
    console.log("aodi2 平台")
}
Aodi2.prototype.loadEngine = function(){
    this.engine.run()
}


function V6(){
    this.run = function(){
        console.log("v6发动机")
    }
}
function V8(){
    this.run = function(){
        console.log("v8发动机")
    }
}

let aodi1 = new Aodi1(new V6())
let aodi2 = new Aodi1(new V8())
let aodi3 = new Aodi2(new V8())

aodi1.loadEngine()
aodi2.loadEngine()
aodi3.loadEngine()