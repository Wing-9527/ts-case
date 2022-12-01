/**
 * ? 类型谓词的作用
 *     类型收窄
 * ? 类型谓词的用法
 *    和函数搭配使用
 * ? 类型谓词和typeof的区别（为什么要有类型谓词）
 *    typeof 无法判读自定义的复杂类型（只能判断原生js的数据结构），类型谓词可以用来判断自定义的复杂类型
 */

function isNumber(arg: any): boolean {
  return typeof arg === 'number'
}

interface Teacher {
  type: 'teacher'
  name: string
  age: number
  officeRoom: string
}

interface Student {
  type: 'student'
  name: string
  age: number
  classRoom: string
}


function isTeacher(val: any): val is Teacher {
  return 'officeRoom' in val
}

function isStudent(val: any): val is Student {
  return 'classRoom' in val
}

function everyThingToString(val: Teacher | Student): void {
  if (val.type === 'teacher') {
    val
  } else if (val.type === 'student') {
    val
  }
}

