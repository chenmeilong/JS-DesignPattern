var obj = {
    code: 200,
    name: "kerwin",
    list: ["aaaa", "bbbb", "ccc"],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next:() =>{
                if (index < this.list.length) {
                    return {
                        value: this.list[index++],
                        done: false
                    }
                }else{
                    return {
                        value:undefined,
                        done:true
                    }
                }
            }
        }
    }
}
//for in


//for of

// var it = obj[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())


for(let i of  obj){
    console.log(i)
}