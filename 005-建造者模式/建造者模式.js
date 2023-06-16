      //以navbar举例
      class Navbar {
        init() { //初始化过程
            console.log("navbar-init")
        }
        getData() { //异步获取数据
            console.log("navbar-getData")
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("navbar-1111")
                }, 1000)
            })
        }
        render() { //拿到数据渲染
            console.log("navbar-render")
        }
    }
    //Navbar和List
    class List {
        init() {
            console.log("List-init")
        }
        getData() {
            console.log("List-getData")
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("list-1111")
                }, 1000)
            })
        }
        render() {
            console.log("List-render")
        }
    }
    //通过Creator统一管理
    class Creator {
        async startBuild(builder) {
            await builder.init()
            let res = await builder.getData()
            console.log(res)
            await builder.render()
        }
    }

    const op = new Creator()
    op.startBuild(new Navbar())
    op.startBuild(new List())