// 특정 함수가 실행되는 속도를 제한
// 특정 기간 내에 어떤 함수를 이미 호출했다면 그 함수가 실행되는 것을 막는 역할
// 특정 함수가 일정한 속도로 실행되고 너무 자주 호출되지 않게 보장

function throttle(func, delay) {
    let wait = false;

    return (...args) => {
        if(wait) {
            return;
        }

        func(...args);
        wait = true;
        setTimeout(() => {
            wait = false;
        }, delay);
    }
}