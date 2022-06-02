import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

// props를 통해 App.js에 있는 expense 객체의 속성 값들을 가져올 수 있음.
function ExpenseItem(props) {
  return (
    // Card  컴포넌트는 사용자 지정 컴포넌트이기 때문에 리액트에 내장된 클래스 네임 속성을 지원하지 않음(사용자가 만들지 않았기 때문).
    // 따라서 해당 컴포넌트 파일 내에서 추가적인 처리가 필요함.
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
