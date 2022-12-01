let a = 123

type AAA = typeof a

let b: AAA = 123

function filter(val: string | number | boolean): void {
  if (typeof val === 'string') {
    val.slice(0, 1)
  }
}

export {}