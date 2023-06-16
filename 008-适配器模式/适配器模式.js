//假设这是官方API ，他们渲染地图的API不一致，可以使用适配器模式封装一层使API变得一致
class TencentMap{
    show(){
        console.log("开始渲染腾讯地图")
    }
}
class BaiduMap{
    display(){
        console.log("开始渲染百度地图")
    }
}

class TencentAdapater extends TencentMap{
    constructor(){
        super()
    }
    display(){
        this.show()
    }
}

function renderMap(map){
    map.display()
}   
renderMap(new TencentAdapater())
renderMap(new BaiduMap())