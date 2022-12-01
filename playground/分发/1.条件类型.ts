interface Father {
  name: string
}

interface Son extends Father {
  age: number
}

type isExtend = Son extends Father ? true : false
