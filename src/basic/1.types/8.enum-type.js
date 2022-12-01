// 默认值
var EnumCode_1;
(function (EnumCode_1) {
    EnumCode_1[EnumCode_1["first"] = 0] = "first";
    EnumCode_1[EnumCode_1["second"] = 1] = "second"; // 1
})(EnumCode_1 || (EnumCode_1 = {}));
// 修改起始值
var EnumCode_2;
(function (EnumCode_2) {
    EnumCode_2[EnumCode_2["first"] = 1] = "first";
    EnumCode_2[EnumCode_2["second"] = 2] = "second"; // 2
})(EnumCode_2 || (EnumCode_2 = {}));
// 字符串值
var EnumCode_3;
(function (EnumCode_3) {
    EnumCode_3["first"] = "one";
    EnumCode_3["second"] = "two";
    EnumCode_3[EnumCode_3["third"] = void 0] = "third";
    EnumCode_3[EnumCode_3["fourth"] = void 0] = "fourth";
})(EnumCode_3 || (EnumCode_3 = {}));
var A;
(function (A) {
    A[A["a"] = 1] = "a";
    A[A["b"] = 2] = "b";
})(A || (A = {}));

console.log(A);

// fetch 请求函数
function pro1() {
    return Promise.resolve(1)
}
function pro2() {
    return Promise.reject(2)
}
function pro3() {
    return Promise.resolve(3)
}

let map = [pro1, pro2, pro3]

async function run(list) {
    for (let i = 0; i < list.length; i++) {
        try {
            let res = await list[i]()
            console.log('resolve', res)
        } catch (e) {
            console.log('reject')
            break
        }
    }
}

run(map)



