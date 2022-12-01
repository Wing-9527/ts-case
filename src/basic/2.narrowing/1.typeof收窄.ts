function test(arg: number | string | boolean | null) {
  if (typeof arg === 'number') {

  } else if (typeof arg === 'string') {

  } else if (typeof arg === 'boolean') {

  }
}





function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      // Object is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}


export {}
