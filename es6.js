// 화살표 함수
const arrow = () => ({ id, content });
const create = (id, content) => ({ id, content });
create(1, "javascript");

const sum = (a, b) => {
  const result = a + b;
  return result;
};

// 즉시실행함수로 쓰기
const person = ((name) => ({
  sayHi() {
    return `Hi? My name is ${name}.`;
  },
}))("Lee");

console.log(person.sayHi());

// 콜백함수, 고차함수에 인수로 전달
[1, 2, 3].map((v) => v * 2);

// 콜백 함수 내부의 this 바인딩
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));
