function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString()); // Date
  } else {
    console.log(x.toUpperCase()); // string
  }
}