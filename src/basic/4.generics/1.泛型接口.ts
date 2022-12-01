interface ReturnObject<T> {
  type: T
  id: T
}

let a: ReturnObject<string> = { type: 1, id: 1 }
let b: ReturnObject<number> = { type: 1, id: 1 }

export {}
