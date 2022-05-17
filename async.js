// async & await

// 1. async
async function fetchUser() {
  // do network request in 10 secs...

  return "ellie";
}

const user = fetchUser();
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

async function getCacao() {
  await delay(2000);
  return "cacao";
}

async function pickFruits() {
  const applePromise = getApple();
  console.log(applePromise);
  const bananaPromise = getBanana();
  console.log(bananaPromise);
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs -> 배열 방식으로 병렬 처리할 함수를 가져와 동시 처리
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// Promise.race 는 가장 먼저 반환되는 것만 보여줌.
function pickOnlyOne() {
  return Promise.race([getCacao(), getApple()]);
}

pickOnlyOne().then(console.log);

// 연습하기
const userStorage = new userStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
