// Curry 함수와 유사하나 결과를 즉시 반환한다는 차이가 있음
function partial(func, ...args) {
    return function partiallyApplied(...moreArgs) {
        return func(...args, ...moreArgs);
    }
}