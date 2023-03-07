// pipe 함수와 같으나, 주어진 함수들을 모두 적용하기 위해 reduceRight을 사용
function compose(...funcs) {
    return function composed(...args) {
        return funcs.reduceRight((result, func) => [func.call(this, ...result)], args)[0];
    }
}