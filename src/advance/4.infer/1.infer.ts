function increment(val1: number, val2: number) {
  return val1 + val2
}

function concat(str1: string, str2: string) {
  return str1 + str2
}

type GetReturnType<T extends (...args: any[]) => any> = T extends (...args: infer Args) => infer ReturnType ? ReturnType : never

type IncRT = GetReturnType<typeof increment>
type ConRt = GetReturnType<typeof concat>

// type GetArgumentsType = ??

export {}
