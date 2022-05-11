// push, pop 메서드를 사용해서 스택 구현 가능하다.

// 생성자 함수로 스택 구현하기
const Stack = (function() {
    function Stack(array = []){
        if(!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.array = array;
    }

    Stack.prototype = {
        constructor: Stack,
        // 스택 가장 마지막에 데이터를 밀어넣는다.
        push(value) {
            console.log(this);
            return this.array.push(value);
        },
        // 스택 가장 마지막 데이터, 즉 가장 나중에 밀어넣은 최신 데이터를 꺼낸다.
        pop() {
            return this.array.pop();
        },
        // 스택의 복사본 배열을 반환한다.
        entries() {
            return [...this.array];
        }
    };

    return Stack;
}());

// class로 스택 구현하기
class stack {
    #array; // private class member

    constructor(array = []) {
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not an array.`);
        }
        this.#array = array;
    }

     // 스택 가장 마지막에 데이터를 밀어넣는다.
     push(value) {
        console.log(this);
        return this.#array.push(value);
    }
    // 스택 가장 마지막 데이터, 즉 가장 나중에 밀어넣은 최신 데이터를 꺼낸다.
    pop() {
        return this.#array.pop();
    }
    // 스택의 복사본 배열을 반환한다.
    entries() {
        return [...this.#array];
    }
}