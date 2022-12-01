
let myNever: never

// 抛出异常
function returnNeverType1(): never {
  throw new Error('never type')
}

function returnNeverType2(): never {
  throw { name: 213 }
}

function control(arg: string | number | boolean) {
  if (typeof arg === 'string') {
    return arg.toString()
  } else if (typeof arg === 'number') {
    return arg.toFixed()
  } else if (typeof arg === 'boolean') {
    return arg
  } else { // never
    arg
  }
}

// 如何让函数返回 never 类型不报错？
function returnNeverType3(): never {
  
}


export  {}
