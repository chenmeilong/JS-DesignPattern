//一组命令的集合
class MacroCommand{
    constructor(){
        this.list = [] //子命令对象
    }
    add(command){
        this.list.push(command)
    }
    execute(){
        for(let item of this.list){
            item.execute()
        }
    }
}

const Tabs = {
    execute(){
        console.log("选项卡执行")

        this.init()
        this.getData()
        this.render()
    },

    init(){
        console.log("init")
    },
    getData(){
        console.log("getData")
    },
    render(){
        console.log("render")
    }
}
const Swipe = {
    execute(){
        console.log("轮播执行")
    }
}

const macroCommand = new MacroCommand()
macroCommand.add(Tabs)
macroCommand.add(Swipe)

macroCommand.execute()