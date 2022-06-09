import React, { useState } from 'react';

const Counter = ({ initialValue }) => {
  console.log(initialValue);
  //0에서 출발 -> useState(0)이라는게 그 뜻임. 그러므로 count가 0이 되는거임.
  //1씩 증가
  //1씩 감소
  //count 상태

  const [count, setCount] = useState(0);
  //useState라는 이 상태의 메소드는, 배열을 반환하고, 배열의 비구조화할당을 통해 첫번째 값을 count, 두번째의 값을 setCount로 받아온 것을 확인할 수 있다.
  //count는 상태의 값, setCount는 상태의 값을 변경하는 함수이다.

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};
export default Counter;
