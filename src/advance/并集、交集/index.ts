interface Left {
  left: '有左手'
}

interface Right  {
  right: '有右手'
}

type UnionType = Left | Right
type InsectionType = Left & Right

let u: UnionType = {
  left: '有左手',
  right: '有右手'
}

interface AAA {
  x: number
  y: number
}

interface BBB {
  y: number
  z: number
}

type CCC = AAA | BBB
type DDD = AAA & BBB

let c: CCC = {
  x: 1,
  y: 2,
  z: 3
}

c.x
c.y
c.z

let d: DDD = {
  x: 1,
  y: 2,
  z: 3
}

d.x
d.y
d.z

// union
type EEE = 'a' | 'b' | 'c' extends 'a' | 'b' ? true : false
