import { Link } from 'react-router-dom';
import "./User.css"
const User = ({ userdata }) => {
  return (
    <Link to={`/userInfo/${userdata.id}`} className="user">
      <p> {userdata.id} </p>
      <p> {userdata.name} </p>
      <p> {userdata.username} </p>
    </Link>
  );
 
};

export default User