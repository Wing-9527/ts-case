interface MyFirstType {
  id: number;
  type: 'custom';
  width: number;
  height: number;
}

type MySecondType<T> = {
  [K in keyof T as `s_${K & string}`]: T[K]
}

let copyObj: MySecondType<MyFirstType> = {
  s_id: 1,
  s_type: 'custom',
  s_width: 100,
  s_height: 100
}

// 未设置 readonly
copyObj.s_id = 2
