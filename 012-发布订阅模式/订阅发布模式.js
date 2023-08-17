//publish 发布
//subscribe 订阅
const PubSub = {
    message:{},
    publish(type,data){
        // this.list.forEach(item=>item())
        if(!this.message[type]) return 
        this.message[type].forEach(item=>item(data))
    },  
    subscribe(type,cb){
        if(!this.message[type]){
            this.message[type] = [cb]
        }else{
            this.message[type].push(cb)
        }
    },
    unsubscribe(type,cb){
        if(!this.message[type]) return 

        if(!cb){
            //取消所有当前type事件
            this.message[type] &&  (this.message[type].length=0)
        }else{
            this.message[type]= this.message[type].filter(item=>item!==cb)
        }
    }
}

function testA(data){
    console.log("testA",data)
}

function testB(data){
    console.log("testB",data)
}

function testC(data){
    console.log("testC",data)
}

PubSub.subscribe("A",testA)
PubSub.subscribe("A",testC)
PubSub.subscribe("B",testB)

PubSub.publish('A','hi')  //触发事件