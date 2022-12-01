/**
 * ? 如果你想获取一个函数的返回类型，你会怎么做
 *    在js里面，只能通过 typeof 一层一层的缩小判断，在ts中可以通过 infer 推导
 */

function increment(val1: number, val2: number) {
  return val1 + val2
}

type GetReturnType<T> = T extends (...args: any) => infer ReturnType ? ReturnType : never
type GetArgsType<T> = T extends (...args: infer Args) => any ? Args : never

type RT = GetReturnType<typeof increment> // 函数的返回类型
type At = GetArgsType<typeof increment>

