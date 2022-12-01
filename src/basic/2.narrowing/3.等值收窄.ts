function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x); // string | number
    console.log(y); // string | boolean
  }
}

example('123', '123')
example('456', '789')