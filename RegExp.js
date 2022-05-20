// 사용자로부터 입력받은 휴대폰 전화번호
const tel = "010-1234-567팔";

// 정규표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
let regExp = /^\d{3}-\d{4}-\d{4}$/;

// tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트(확인)한다.
regExp.test(tel); // false

// 정규표현식 생성
const target = "Is this all there is?";

// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.
let regexp = /is/i;

// test 메서드는 target 문자열에 대해 정규표현식 regexp의 패턴을 검색하여 매칭결과를 "불리언" 값으로 반환한다.
regexp.test(target);

// RegExp 생성자 함수를 사용하면 변수를 사용해 동적으로 RegExp 객체를 생성할 수 있다.
const count = (str, char) => (str.match(new RegExp(char, "gi")) ?? []).length;

count("Is this all there is", "is"); // 3
count("is this all there is?", "xx"); // 0

// Method
// RegExp.prototype.exec
const text01 = "Is this all there is?";
regExp = /is/;

regExp.exec(text01);
