/*
 * @作者: kerwin
 */

let count = 0

function increase(){
    return ++count
}

function decrease(){
    return --count
}

//export 

export default {
    increase,
    decrease
}