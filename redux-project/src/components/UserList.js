import React from 'react';
import './WaitingList.css';

const UserItem = ({ name }) => {
  return (
    <li>
      <div>
        {name}
      </div>
    </li>
  );
};

const UserList = ({userList}) => {
  const userItems = userList.map(m => (
    <UserItem
      key={m._id}
      name={m.name}
      id={m._id}
    />
  ));
  return (
    <div className="WaitingList">
      <h2>user list</h2>
      <ul>
        {userItems}
      </ul>
    </div>
  );
};

export default UserList;
