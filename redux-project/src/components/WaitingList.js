import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, enter, leave }) => {
  // console.log('text : ', text);
  // console.log('entered : ', entered);
  // console.log('leave : ', leave);
  return (
    <li>
      <div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
      <div className="buttons">
        <button onClick={enter}>입장</button>
        <button onClick={leave}>나감</button>
      </div>
    </li>
  );
};

const WaitingList = ({input, waitingList, changeInput, create, enter, leave}) => {
  // console.log('input : ', input);
  // console.log('waitingList : ', waitingList);
  // console.log('changeInput : ', changeInput);
  // console.log('create : ', create);
  // console.log('enter : ', enter);
  const waitingItems = waitingList.map(w => (
    <WaitingItem
      key={w.id}
      text={w.name}
      entered={w.entered}
      id={w.id}
      enter={() => enter(w.id)}
      leave={() => leave(w.id)}
    />
  ));
  return (
    <div className="WaitingList">
      <h2>대기자 명단</h2>
      <form>
        <input value={input} onChange={changeInput}/>
        <button onClick={create}>등록</button>
      </form>
      <ul>
        {waitingItems}
      </ul>
    </div>
  );
};

export default WaitingList;
