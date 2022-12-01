function firstElement(arr: any[]) {
  return arr[0];
}

let f = firstElement([1, 2, 3]) // type any

// 推断 ----------------------------------------------------------------------------------------------

function getFirstElement<T>(args: T[]): T {
  return args[0]
}

let a = getFirstElement(['a', 'b', 'c']) // type string
let b = getFirstElement([]) // type never
let c = getFirstElement([1, 2, 3]) // type number

// 约束 -----------------------------------------------------------------------------------------------
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

let dd = longest([1, 2, 3], [4, 5, 6])

type Like = {
  name: string
  length: number
}

let ee: Like = { name: 'ee', length: 1 }
let ff: Like = { name: 'ff', length: 2 }

let gg = longest(ee, ff)
console.log(gg);

export {}
