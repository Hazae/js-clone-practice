// 특정 함수가 호출되는 속도를 제한
// 일련의 빠른 이벤트가 반복적으로 함수를 활성화하는 것을 방지하는 역할
// 이벤트가 실행되지 않은 채로 일정 시간이 경과할 때까지 이벤트를 실행시키지 않고 함수의 실행을 연기하는 방식으로 동작
function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay)
    }
}