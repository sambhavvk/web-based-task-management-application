import React from 'react';

function UserList(props) {
  const { users, onSelectUser } = props;

  const handleUserClick = (user) => {
    onSelectUser(user);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
