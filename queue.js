// shift와 push 메서드를 사용하면 큐를 쉽게 구현할 수 있다.

// 생성자 함수로 큐 구현하기
const Queue01 = (function() {
    function Queue(array = []) {
        if(!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.array = array;
    }

    Queue.prototype = {
        consturctor: Queue,
        // 큐의 가장 마지막에 데이터를 밀어 넣는다.
        enque(value) {
            return this.array.push(value);
        },
        // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어넣은 데이터를 꺼낸다.
        dequeue(){
            return this.array.shift();
        },
        entries() {
            return [...this.array];
        }
    };

    return Queue;
}());

// 클래스로 큐 구현하기
class Queue02 {
    #array;
    constructor(array = []) {
        if(!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.#array = array;
    }

    // 큐의 가장 마지막에 데이터를 밀어 넣는다.
    enque(value) {
        return this.#array.push(value);
    }
    // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어넣은 데이터를 꺼낸다.
    dequeue(){
        return this.#array.shift();
    } 
    entries() {
        return [...this.#array];
    }
}