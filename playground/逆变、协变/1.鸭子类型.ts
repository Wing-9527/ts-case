/**
 * ! TS中的类型系统是一种结构化类型。又称鸭子类型
 */

interface Father {
  name: string
}

interface Son {
  name: string
  age: number
}

let f1: Father
let s1: Son = {
  name: '儿子1',
  age: 18
}
f1 = s1


export {}

