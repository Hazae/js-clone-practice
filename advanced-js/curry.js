// 일부 인수를 미리 채워 이미 존재하는 함수에서 새로운 함수를 만들 때 사용

function curry (func, arity = func.length) {
    return function curried(...args) {
        if (args.length >= arity) return func(...args);
        return function(...moreArgs) {
            return curried(...args, ...moreArgs);
        }
    }
}