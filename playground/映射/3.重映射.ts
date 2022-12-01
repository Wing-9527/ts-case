interface Thing {
  price: number
  type: string
  num: number
  size: number
}


type CopyType<T> = {
  [K in keyof T as `_${Capitalize<K & string>}`]: T[K]
}

type Thing2 = CopyType<Thing>


export {}