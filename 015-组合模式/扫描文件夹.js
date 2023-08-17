class Folder{
    constructor(folder){
        this.folder = folder
        this.list = []//保存 子文件夹 或者文件
    }
    add = function(res){
        this.list.push(res)
    }
    scan = function(){
        console.log("扫描文件夹",this.folder)
        for(let i = 0;i<this.list.length;i++){
            this.list[i].scan()
        }
    }
}

class File{
    constructor(file){
        this.file = file
    }
    scan = function(){
        console.log("开始扫描文件",this.file)
    }
} 

//根
let rootFolder = new Folder("root")
//子文件夹
let htmlFolder = new Folder("html")
let cssFolder = new Folder("css")
let jsFolder = new Folder("js")

//文件
let html4 = new File("html4")
let html5 = new File("html5")
let css2 = new File("css2")
let css3 = new File("css3")
let es5 = new File("es5")
let es6 = new File("es6")

rootFolder.add(htmlFolder)
rootFolder.add(cssFolder)
rootFolder.add(jsFolder)

htmlFolder.add(html4)
htmlFolder.add(html5)

cssFolder.add(css2)
cssFolder.add(css3)

jsFolder.add(es5)
jsFolder.add(es6)

//调用
rootFolder.scan()