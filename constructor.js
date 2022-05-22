const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);

const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

const func = new Function('x', 'return x * x');
console.log(typeof func);
console.log(func);

// 생성자 함수에 의한 객체 생성 방식

function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다. *일반 함수로서 호출된다*
const circle3 = Circle(15);

console.log(circle3); // undefined -> 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.

