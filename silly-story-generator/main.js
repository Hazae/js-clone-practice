// Enter custom name 텍스트 필드 값을 저장
const customName = document.getElementById('customname');
// Generate random story 버튼 오브젝트를 저장
const randomize = document.querySelector('.randomize');
// HTML body 끝에 있는 클래스가 story인 element 저장
const story = document.querySelector('.story');

// 배열을 가져와서 배열이 가진 항목 중 하나를 랜덤하게 반환
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Chirstmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    let newStory = story.textContent;

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = "";
  story.style.visibility = 'visible';
}