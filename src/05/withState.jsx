import React from 'react';
import withState from 'recompose/withState';
import Button from '../04/Button';

export const withCountState = withState('count', 'setCount', 0); // count: 프로퍼티 이름, setcount: state를 변경하는 콜백 함수 프로퍼티 이름, 0: state의 초기값

function Counter({ count, setCount }) {
  const increaseCount = () => setCount((value) => value + 1);

  return (
    <div>
      현재 카운터: {count}
      <Button onPress={increaseCount}>Click!</Button>
    </div>
  );
}

export const CounterWithCountState = withCountState(Counter);
