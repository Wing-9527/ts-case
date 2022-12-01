/**
 * ? 如果你想拷贝一个类型，你会怎么做
 *    映射
 */

interface Pure {
  id: number
  type: string
}

interface Thing {
  price: number
  type: string
  num: number
  size: number
}

// interface Copy {
//   id: number
//   type: string
// }

type CopyType<T> = {
  [K in keyof T]: T[K]
}
/**
 * input: Thing
 * keyof T :    price | type | num | size
 */

type Res1 = CopyType<Pure>
type Res2 = CopyType<Thing>
