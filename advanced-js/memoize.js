// 동일한 인수로 연산 비용이 많이 드는 루틴을 여러 번 호출하는 것을 방지하기 위해 특정 함수의 결과를 캐싱하는 용도로 사용
// 주어진 함수의 결과를 캐싱하고 동일한 인수로 다시 호출될 때 그 결과 값을 가져오기 위해 인수를 키로 사용

function memoize(func) {
    const cache = new Map();
    return function () {
        const key = JSON.stringify(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func.apply(this, arguments);
        cache.set(key, result);
        return result;
    }
}