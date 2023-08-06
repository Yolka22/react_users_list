import React from 'react';
import User from '../User/User.jsx';
import UserApi from '../../Api/UserApi';
import "./UserList.css"
const UsersList = ({ apiLink }) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    UserApi.getUsers(apiLink)
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error setting users:", error);
      });
  }, [apiLink]);

  return (
    <div className='userlist'>
      {users.map((user) => (
        <User key={user.id} userdata={user} />
      ))}
    </div>
  );
};

export default UsersList;