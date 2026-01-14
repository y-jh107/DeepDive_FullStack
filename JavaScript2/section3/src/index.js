// let color = "skyblue";
// color = "yellow";
// console.log(color);

let isCatOrDog; // 카멜 표기법(첫 단어를 제외한 나머지 단어의 시작을 대문자로)

let nowType = "안녕하세요";

console.log(typeof nowType);

nowType = 100;

console.log(typeof nowType);

// const color = "skyblue";
// color = "yellow";

// let number = 123;
// number = "123"; // 원시 타입

let array = [1, "2", 3]; // 비원시 타입

let number = 25;
number = 10.00123;
number = Infinity;
number = NaN;

let number1 = 10;
console.log(number1 / 0);

let number2 = 10;
console.log("자바스크립트" / number2); // NaN

let name1 = "jinhyuk";
let name2 = "jinhyuk";
let name3 = `jinhyuk`;

let name = "jinhyuk";
let intro = `제 이름은 ${name}입니다.`; // template literal

console.log(intro);

let isClicked = false;
let isOpen = true;

if (isClicked) {
  console.log("클릭O");
} else {
  console.log("클릭X");
}

let name4 = null;
let name5;

console.log(name5);

// let num1 = 10;
// let num2 = 5;

// console.log(num1 / num2); // 묵시적 형변환
// console.log(num1 + num2);
// console.log(parseInt(num1) + num2); // 명시적 형변환

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// console.log(num1 % 2);
// console.log(num2 % 2);

// let num = 10;

// console.log(num++); // 후위연산 -> 10
// console.log(num); // 현재 num 값 -> 11
// console.log(++num); // 전위연산 -> 12

// let num2 = 10;

// console.log(num2--); // 후위연산 -> 10
// console.log(num2); // 현재 num 값 -> 9
// console.log(--num2); // 전위연산 -> 8

let num1 = 10;
let num2 = "10";

console.log(num1 === num2); // type 검사
console.log(num1 == num2); // 값만 검사

let num;
num = num ?? 20; // null병합 연산자, undefined나 null이면 20 대입

console.log(num);

let num3 = 100;

console.log(num3 % 2 === 0 ? "짝수" : "홀수");
