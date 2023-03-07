// 전달된 요소들의 배열을 다른 배열의 요소와 결합하는 함수
// 여러 배열을 하나의 튜플 배열로 결합하는 데 사용
// 결과 배열에는 각 배열에서 상응하는 요소들이 포함됨
function zip(...arrays) {
    const maxLength = Math.max(...arrays.map(array => array.length));
    return Array.from({ length: maxLength }).map((_, i) => {
        return Array.from({ length: arrays.length }, (_, j) => arrays[j][i]);
    });
}