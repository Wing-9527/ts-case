interface Father {
  name: string
}

interface Son {
  name: string
  age: number
}

// 协变 -----------------------------------------------------------------

let f1: Father

let s1: Son = {
  name: 'son1',
  age: 13
}

f1 = s1 // 协变

// 逆变 -------------------------------------------------------------
// ts中的逆变一般发生在函数参数上

// 声明类型：Father => 1
let fnFather = (val: Father) => {
  val.name
}

// 声明类型： Son => 1
let fnSon = (val: Son) => {
  val.age
}

fnFather = fnSon // fnFather  运行时类型： Son => 1
fnSon = fnFather // 逆变

// fnFather = (val: Son) => {
//   val.age
// }

// 联合类型 探究逆变

let toString = (arg: number) => {
  return arg + ''
}

let everyThingToSting = (arg: string | number | boolean) => {
  if (typeof arg === 'string') {
    return arg
  } else if (typeof arg === 'number') {
    return `${arg * 100}`
  } else {
    return '' + arg
  }
}

toString = everyThingToSting
everyThingToSting = toString // 逆变

export {}
