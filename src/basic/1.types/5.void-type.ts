function returnVoidType1(): void {}

function returnVoidType2(): void {
  return
}

function returnVoidType3(): void {
  return 1
}

/**
 * ? 为什么返回 undefined 不报错
 */
function returnVoidType4(): void {
  return undefined
}

// -------------------------------------------------------------------
// 异常行为
type voidFunc = () => void
 
const f1: voidFunc = () => {
  return true
};
 
const f2: voidFunc = () => true
 
const f3: voidFunc = function () {
  return true
};
