type Without<T, U> = T extends U ? never : T

type Res1 = Without<string | number | boolean, boolean>
  /**
   * (string extends boolean ? never : string) |
   * (number extends boolean ? never : number) |
   * (boolean extends boolean ? never : boolean)
   * 
   * output: 
   *    string | number | never
   */

export {}
