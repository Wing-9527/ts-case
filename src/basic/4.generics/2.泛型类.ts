class Human<T> {
  name: T
  age: number
  constructor(name: T, age: number) {
    this.name = name
    this.age = age
  }
}

let me: Human<string> = new Human('dhy', 1)
let you: Human<string> = new Human(1, 2)

export {}
