// void
// void -> 공허, 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

// 함수의 반환값 타입으로 null이나 undefined를 정의하면 return문을 사용해야함
function func2(): void {
  console.log("hello");
}

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
