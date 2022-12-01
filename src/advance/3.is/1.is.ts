function getType(arg: any) {
  if (typeof arg === 'string') {
    arg
  }
}

function isString(val: any): val is string {
  return typeof val === 'string'
}

function everyThingToString(val: number | string): string {
  if (isString(val)) {
    return val.slice(0, 1)
  } else {
    return '' + val
  }
}

interface Student {
  type: 'student'
  name: string
  learn: string
}

interface Teacher {
  type: 'teacher'
  name: string
  teach: string
}

type Type2 = Teacher | Student

function difference(person: Type2) {
}
