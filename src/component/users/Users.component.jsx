import React from 'react';
import UserItem from './UserItem.component';
import Spinner from '../spinner/spinner.component';
import '../users/user.style.css';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='user-style'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
