import './Card.css';

const Card = (props) => {
  // 컴포넌트를 불러와 사용할 때 className 속성값을 정상적으로 사용하도록 만들기 위해 props로 className을 받아오도록 만듦.
  const classes = 'card ' + props.className;
  // props.children을 통해서 래퍼 컴포넌트로의 역할을 수행할 수 있게 됨.
  return <div className={classes}>{props.children}</div>;
};

export default Card;
