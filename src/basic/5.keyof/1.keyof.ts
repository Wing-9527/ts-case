interface Keys {
  [k: number]: string
}

type K1 = keyof Keys // type: number

type Test = {
  name: 123,
  id: 0
}

type K2 = keyof Test // 此处转换为 union type（联合类型）

let k2: K2 = 'name' // type: 'name' | 'id'

export {}
