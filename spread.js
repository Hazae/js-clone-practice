// 스프레드 문법은 하나로 뭉쳐있는 여러 값들의 집합을 펼쳐서 개별적인 값들의 목록으로 만든다.

console.log(...[1, 2, 3]);
// 문자열은 이터러블이다.
console.log(...'Hello');
// 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
console.log(...{a: 1, b: 2});

// 스프레드 문법의 결과는 값이 아니다. ...이 피연산자를 연산하여 값을 생성하는 연산자가 아니기 때문. 따라서 스프레드 문법의 결과는 변수에 할당할 수 없다.

// Math.max()에 숫자가 아닌 배열을 인수로 전달하면 최대값을 구할 수 없으므로 NaN을 반환.
// 이럴 때 배열을 펼쳐서 요소들을 개별적인 값들의 목록으로 만든 후, Math.max()의 인수로 전달
Math.max(...[1,2,3]);

// concat() 대신 스프레드 문법으로 배열 합치기
const arr = [...[1, 2], ...[3, 4]];
console.log(arr);

// splice() + 스프레드 문법으로 배열 해체 및 수정
const arr1 = [1, 4];
const arr2 = [2, 3];

arr.splice(1, 0, ...arr2);
console.log(arr1);

// slice() 대신 배열 얕은 복사
const origin = [1, 2];
const copy = [...origin];

console.log(copy);
console.log(copy === origin);

// 이터러블인 유사 배열 객체를 배열로 변환
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};

const arr3 = Array.prototype.slice.call(arrayLike);
console.log(Array.isArray(arr3));

function sum() {
  return [... arguments].reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1,2,3));

// 동일한 결과, 더 나은 방법
const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);

console.log(sum(1,2,3));

// 스프레드 프로퍼티
// 객체 복사(얕은 복사)
const obj = { x: 1, y: 2};
const copy = {...obj};
console.log(copy);
console.log(obj === copy);

const merged = { x: 1, y: 2, ...{a: 3, b: 4}};
console.log(merged);