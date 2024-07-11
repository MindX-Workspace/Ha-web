// Có tất cả 3 loại biến trong JS: var, let, const
// Chỉ duy nhất var là có hoisting. Khái niệm về việc biến có thể truy cập ngay cả khi chưa được khai báo
// Hoisting là một tính năng có thể hữu ích trong một số trường hợp, nhưng dẫn đến code khó hiểu và khó bảo trì. Suy ra, nên dùng const và let
console.log(message);
var message = 40

great()

function great() {
    console.log("Hello");
}

/* 
- Var là phương pháp truyền thống và được sử dụng từ những phiên bản JS đầu tiên
- Có phạm vi toàn cục (global scope) và phạm vi khối (function scope)
- Có thể khai báo lại biến cùng tên trong một phạm vi
- Var có tính chất hoisting và đặc điểm cho phép ghi đè giá trị
*/

var a = 10
var b
b = 100
console.log(b);

function test() {
    console.log(a); // Output: 10

    var a = 20 // Khai báo lại biến a
    console.log(a); // Output: 20
}

test()
console.log(a); // Output: 10

/* 
- Const dùng để khai báo hằng số, giá trị không thể thay đổi sau khi khai báo
- Có phạm vi khối (block scope) và chỉ được truy cập trong khối lệnh nơi nó được khai báo
- Bắt buộc phải gán giá trị sau khi khai báo biến
- Không thể khai báo lại hoặc thay đổi giá trị sau khi khai báo
*/
const c = 10

function test() {
    const c = 20
    console.log(c);
}

test()
console.log(c);

/* 
- Let được giới thiệu cùng const trong phiên bản ES6, giúp cải thiện việc quản lý phạm vi biến
- Có phạm vi khối (block scope) và chỉ được truy cập trong khối lệnh nơi nó được khai báo
- Không thể khai báo lại biến cùng tên trong cùng một khối lệnh
- Let không bị ảnh hưởng bởi hoisting
*/

// DOM callback
const h = document.getElementById("test")
h.addEventListener('mouseover', () => {
    prompt("Nhập vào cái gì đi")
})

// Hàm
var a = function () {
    console.log("Testing");
}

console.log(a);

function fix(name) {
    // Template string là mẫu văn bản được tạo sẵn, được bao quanh bởi dấu `` và sử dụng cú pháp ${parameter} 
    return `Hello, ${name}`;
}
console.log(fix("Hà"));

// Mảng, danh sách
let fruits = ["Apple", "Banana", "Cherry"]
console.log(fruits[2]);

// Thêm phần tử vào mảng
fruits.push("Orange")
console.log(fruits);

// Vòng lặp
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Luôn luôn có khái niệm và key và value trong code. VD: 0: Apple, 0 là key, Apple là value của 0
// for..of, in ra value
for (let fruit of fruits) {
    console.log(fruit);
}

// for..in in ra key
for (let fr in fruits) {
    console.log(fr);
}

// Khai báo chuỗi
let sentence = "Something we gotta say"

// Độ dài của chuỗi
console.log(sentence.length);

// Kiểm tra nếu chuỗi chứa một từ cụ thể
console.log(sentence.includes("ing"));

// Cắt chuỗi có cấu trúc slice(start, end), start luôn luôn bị bỏ qua
let word = sentence.slice(4, 9)
console.log(word);

// Thay thế từ trong chuỗi
let newSentence = sentence.replace("we", "I")
console.log(newSentence);