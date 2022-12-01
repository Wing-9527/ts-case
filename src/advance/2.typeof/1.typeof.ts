// js中的 typeof
let a = typeof ''
console.log(a); // 'string'

/**
 * ts中 typeof 识别类型，类型收窄
 */
/** 
 * ! case 1
 */
interface Type1 {
  name: string
}

let t1: Type1 = { name: 't1' }

// type Type2 = typeof t1

// let t2: Type2 = { name: 't2' }

/** 
 * ! case 2 
 */
type StrType = '123'
let st: StrType = '123'
type CType = typeof st

export {}
