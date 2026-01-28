// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

// 타입스크립트의 타입 검사를 무시하고 런타임에 오류가 발생하는 경우가 생기기 때문에 최대한 사용 자제

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknown 변수의 타입을 좁혀주었을 때(타입정제)만 할당 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}
