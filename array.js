const arr = [1];

// push 메서드는 원본 배열을 직접 변경한다.
arr.push(2);
// 마지막 요소로 추가할 요소가 하나뿐이라면 push 메서드를 사용하지 않고 length 프로퍼티를 사용하여 배열의 마지막에 요소를 직접 추가할 수도 있다.
arr[arr.length] = 3;
console.log(arr);

// concat 메서드는 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
const result = arr.concat(3);
console.log(arr);
console.log(result);

const arr_01 = [1,2,2,3];

// 배열에서 요소 2를 검색하여 첫번째로 검색된 요소의 인덱스를 반환한다.
arr_01.indexOf(2);
// 배열에 찾는 요소가 없다면 -1을 반환한다.
arr_01.indexOf(4);
// 두번째 인수는 검색을 시작할 인덱스 번호다. 두번째 인수를 생략하면 처음부터 검색한다.
arr_01.indexOf(2,2);

// indexOf() 대신 includes() 메서드를 사용해도 똑같은 결과를 얻는다. includes()는 true, false를 반환한다.
const foods = ['apple', 'banana', 'orange'];

// foods 배열에 'orange' 요소가 있는지 확인한다.
if(!foods.includes('orange')) {
    // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
    foods.push('orange');
}

console.log(foods);

const arr_02 = [1,2];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. pop 메서드는 원본 배열을 직접 변경한다.
let result01 = arr.pop();
console.log(result01);
console.log(arr_02);

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length값을 반환한다.
// unshift()는 원본 배열을 직접 변경한다. 따라서 스프레드 문법을 사용하는 편이 좋다.
let result02 = arr.unshift(3,4);
console.log(result02);
console.log(arr_02);

const newArr = [3, ...arr_02];
console.log(newArr);

// shift() 메서드는 원본 배열에서 첫번째 요소를 제거하고 제거한 요소를 반환한다.
let result03 = arr_02.shift();
console.log(result03);
console.log(arr_02);

// concat 메서드는 인수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
const arr_03 = [1, 2];
const arr_04 = [3, 4];

let result04 = arr_03.concat(arr_04);

// 배열 arr_04와 숫자를 원본 배열 arr_03의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr_03.concat(arr_04, 5);
console.log(arr_03);

// push와 unshift 메서드는 원본 배열을 직접 변경하지만 concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
// 따라서 push와 unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해두어야 하며 concat 메서드를 사용할 경우 반환값을 반드시 변수에 할당받아야 한다.
// 인수로 전달받은 값이 배열인 경우 push와 unshift 메서드는 배열을 그대로 원본 배열의 마지막/첫번째 요소로 추가한다.
// 하지만 concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다.
// concat 메서드는 스프레드 문법으로 대체할 수 있다.
let result05 = [1,2].concat([3,4]);
console.log(result05);

result05 = [...[1,2], ...[3,4]];
console.log(result05);

const arr_05 = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
const result06 = arr.splice(1,2,20,30);
console.log(result06); // [2,3]
console.log(arr_05); // [1, 20, 30, 4]

// 제거할 요소의 갯수를 0으로 지정하면 아무런 요소도 제거하지 않고 새로운 요소들을 삽입한다.
// 제거할 요소의 갯수를 생략하면 첫번째 인수로 전달된 시작 인덱스부터 모든 요소를 제거한다.
const result07 = arr_05.splice(1, 0, 100);

// 제거한 위치에 추가할 요소들의 목록을 전달하지 않으면 원본 배열에서 지정된 요소를 제거하기만 한다.

// join()은 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열을 반환한다.
arr_05.join();
// 원본 배열의 모든 요소를 문자열로 변환한 후, 빈 문자열로 연결한 문자열을 반환한다.
arr_05.join('');
// 원본 배열의 모든 요소를 문자열로 변환한 후, 구분자 ':'로 연결한 문자열을 반환한다.
arr_05.join(':');

// reverse()는 원본 배열의 순서를 반대로 뒤집는다. 이때 원본 배열이 변경된다.
const result08 = arr_05.reverse();
console.log(arr_05);

// fill()은 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
const arr_06 = [1,2,3];

arr_06.fill(0);
// 두번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다.
arr_06.fill(0, 1);
// 세번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.
arr_06.fill(0, 1, 3);
console.log(arr_06);

// Array.from()을 사용하면 두번째 인수로 전달한 콜백함수를 통해 요소값을 만들면서 배열을 채울 수 있다.
const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
console.log(sequences(3)); // [0, 1, 2];

// flat()은 ES10에 도입되었음. 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화한다.
[1, [2, 3, 4, 5]].flat(); // -> [1,2,3,4,5]