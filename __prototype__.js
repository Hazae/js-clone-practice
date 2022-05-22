// 상속은 객체지향 프로그래밍의 핵심 개념으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것.
// 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.

// 생성자 함수
function CircleBefore(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new CircleBefore(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new CircleBefore(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
console.log(circle1.getArea === circle2.getArea); // false

// 상속을 통해 불필요한 중복을 제거해보자.
function Circle(radius) {
  this.radius = radius;
}

// Circle 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩 되어있다.

Circle.prototype.getArea = function() {
  return Math.PI * this.radius ** 2;
}

// 인스턴스 생성
const circle3 = new Circle(3);
const circle4 = new Circle(4);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속 받는다.
//즉, Circle 생성자 함수가 생서하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true


// __proto__ 는 접근자 프로퍼티다. (접근자 프로퍼티 참고:16.3.2절)
const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;
// setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x);

// __proto__ 접근자 프로퍼티는 Object.prototype 의 프로퍼티다.
// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다.

