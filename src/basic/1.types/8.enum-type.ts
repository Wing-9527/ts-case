// 默认值
enum EnumCode_1 {
  first, // 0
  second // 1
}

// 修改起始值
enum EnumCode_2 {
  first = 1, // 1
  second // 2
}

// 字符串值
enum EnumCode_3 {
  first = 'one', // 'one'
  second = 'two', // 'two'
	third, // Enum member must have initializer
	fourth
}

enum A {
  a = 1,
  b = 2
}
