import logo from './logo.svg';
import './App.css';
import UsersList from './modules/UI/UsersList/UsersList';
const apiLink = "https://jsonplaceholder.typicode.com/users"

function App() {
  return (
    <div className="App">
      <UsersList apiLink={apiLink}></UsersList>
    </div>
  );
}

export default App;
