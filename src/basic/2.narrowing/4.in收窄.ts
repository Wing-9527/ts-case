interface Fish {
  type: 'fish'
  swim(): void
}

type Fruit = {
  type: 'fruit'
}

type Human = {
  eatFruit(): void
  eatFish(): void
}

function example(arg: Fish | Fruit | Human) {
  if ('type' in arg) {
    arg
  }
  if ('swim' in arg) {
    arg
  }
}



// in 判断原型方法
type MyObj = {
  name: string
  age: number
}
let obj: MyObj = { name: 'haha', age: 18 }
if ('toString' in obj) {
  // obj.toFixed()
  obj.toString()
}
