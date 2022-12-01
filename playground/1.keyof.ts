interface Man {
  name: string
  age: number
}

type ManKeys = keyof Man // name | age
