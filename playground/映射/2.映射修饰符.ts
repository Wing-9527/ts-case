/**
 * ? ts中的映射修饰符有哪些
 *    readonly ? + -
 */

interface Thing {
  price?: number
  type?: string
  num?: number
  size?: number
}

let thg:Thing = {

}

type CopyType<T> = {
  [K in keyof T]-?: T[K]
}

type Thing2 = CopyType<Thing>
// let thg2: Thing2 = {
//   // price: 1
// }


export {}
