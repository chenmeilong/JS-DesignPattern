var Container = function (params={}) {
    var F = function () {}

    F.prototype.init =async function () {
        var list =await this.getData()
        this.render(list)
    }

    F.prototype.getData =params.getData || function () {
        throw new Error("必须传入getData")
    }
    F.prototype.render = function (list) {
        console.log("render",list)
    }

    return F
}

var Myclass = Container({
    getData(){
        console.log("获取nowplaying")
        return [1,2,3]
    }
})

new Myclass().init()

var Myclass2 = Container({
    getData(){
        console.log("获取comingsoon")
        return [4,5,6]
    }
})  //不传参数就会报错
   
new Myclass2().init() //异步执行