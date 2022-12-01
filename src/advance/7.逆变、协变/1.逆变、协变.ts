interface Father {
  name: string
}

interface Son extends Father {
  age: number
  gender: string
}

// Father -> void
let fnFather = (val: Father) => {
  val.name
}

// Son -> void
let fnSon = (val: Son) => {
  val.age + ' - ' + val.gender
}

fnFather = fnSon
fnSon = fnFather

