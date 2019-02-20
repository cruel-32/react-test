import React from 'react';
import './WaitingList.css';

const MemberItem = ({ name }) => {
  return (
    <li>
      <div>
        {name}
      </div>
    </li>
  );
};

const MemberList = ({memberList}) => {
  const memberItems = memberList.map(m => (
    <MemberItem
      key={m._id}
      name={m.name}
      id={m._id}
    />
  ));
  return (
    <div className="WaitingList">
      <h2>member list</h2>
      <ul>
        {memberItems}
      </ul>
    </div>
  );
};

export default MemberList;
