// 객체에서 특정한 값들을 선택하는 목적으로 사용
// 주어진 객체에서 특정한 프로퍼티들을 선택하여 새로운 객체를 생성하는 방법
// 프로퍼티가 사용가능한 경우 어떤 객체에서 프로퍼티의 하위 집합을 추출할 수 있도록 하는 함수형 프로그래밍 기법

function pick(obj, keys) {
    return keys.reduce((acc, key) => {
        if(obj.hasOwnProperty(key)) {
            acc[key] = obj[key];
        }
        return acc;
    })
}