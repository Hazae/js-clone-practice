// pick 함수와 정반대
// 어떤 객체에서 특정한 프로퍼티들을 제거하고 싶을 때 사용
// 특정 프로퍼티들을 숨겨 데이터를 과도하게 가져오는 것을 방지
// 숨기고자 하는 프로퍼티의 갯수가 보여주고자 하는 프로퍼티의 갯수보다 적다면 pick을 대체하여 사용할 수 있음
function omit(obj, keys) {
    return Object.keys(obj).filter(key => !keys.includes(key)).reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});
}