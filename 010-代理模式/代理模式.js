class Star{
    play(){
        console.log("演戏")
    }
}
class StarProxy{  //给start代理
    constructor(){
     this.superStar = new Star()
    }
    talk(price){
     if(price>=10000){
         this.superStar.play()
     }else{
         throw new Error("价钱不合适")
     }
    }
}

let jr = new StarProxy()
jr.talk(10000)