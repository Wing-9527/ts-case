function test(value: number) {
  if (value) {
    // do sth
  } else {
    // do sth
  }
}

// 真值收窄，过滤掉 null 值
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) { // 此时的 strs 类型收窄为 string[]
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

