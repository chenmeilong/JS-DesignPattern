class Receiver{
    //接受类
    execute(){
        console.log("接收者执行请求")
    }
}

class Command{
    constructor(receiver){
        this.receiver = receiver
    }
    //命令类
    execute(){
        console.log("命令对象=>接受者如何处理")
        this.receiver.execute()
    }
}

class Invoker{
    //发布类
    constructor(command){
        this.command =command
    }
    order(){
        console.log("发布请求")
        this.command.execute()
    }
}

const client = new Invoker(new Command(new Receiver()))
client.order()