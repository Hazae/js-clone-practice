// 여러 개의 함수를 연결하고 그 연결고리에서 어떤 함수의 결과를 다음 함수로 전달하고 싶을 때 사용
// Unix pipe 연산자와 유사
function pipe(...funcs) {
    return function piped(...args) {
        return funcs.reduce((result, func) => [func.call(this, ...result)], args)[0];
    };
}