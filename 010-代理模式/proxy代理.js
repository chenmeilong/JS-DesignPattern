var star = {
    name:"tiechui",
    workprice:10000
}

let proxy = new Proxy(star,{
    get(target,key){
        if(key==="workprice"){
            console.log("访问了")
        }
        return target[key]
    },
    set(target,key,value){
        if(key==="workprice"){
            console.log("设置了")
            if(value>10000){
                console.log("可以合作")
            }else{
                throw new Error("价钱不合适")
            }
        }
    }
}) 
//使用代理
proxy.name
proxy.workprice
proxy.workprice = 10
proxy.workprice =  10000