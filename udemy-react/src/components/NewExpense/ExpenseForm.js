import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  // 대체 방법
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   // 기존 객체를 스프레드 연산자로 복사
    //   ...userInput,
    //   // 기존 객체에 title 부분만 오버라이드
    //   enteredTitle: event.target.value,
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // 하기 방식은 기존 state에 의존해 거기에 오버라이딩으로 새 프로퍼티 값을 할당한다.
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    // 따라서 상기 방식보다는 하기처럼 set 함수를 호출해서 함수를 전달해야한다.
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // });
    // 이 방식은 동시에 수많은 상태 업데이트가 이뤄져야 할 때, 오래되거나 잘못된 상태에 의존하기보다 이 상태가 항상 최신값이며 변동 가능성이 있다는 걸
    // 리액트 자체에서 인지하고 있음
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;