/**
 * ? 对象类型中的父子关系
 *      多的是子类型，少的是父类型
 * ? 联合类型中的父子关系 
 *      多的是父类型，少的是子类型
 * ! 子类型比父类型更具体
 *      对象类型中，子类型属性更多。对于事物的描述会更加的清晰
 *      对于联合类型，子类型属性更少。描述事物的边界就更窄，所以说对事物的描述更加
 */


interface Father {
  name: string
}

interface Son {
  name: string
  age: number
}
type isSon = UnionFather extends UnionSon ? true : false

type UnionFather = string | number | boolean | symbol
type UnionSon = string | number




export {}
