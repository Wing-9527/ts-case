interface MyType_1 {
  name: string
  id: number
  hobby: string[]
}

type Keys = keyof MyType_1 // 'name' | 'id' | 'hobby'

type Without = Exclude<Keys, 'name'>

type AAAAA = ('name' extends 'name' ? never : 'name') |
('id' extends 'name' ? never : 'id')|
('hobby' extends 'name' ? never : 'hobby')


