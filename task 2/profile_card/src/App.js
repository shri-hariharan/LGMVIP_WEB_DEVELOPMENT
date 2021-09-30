import './App.css';
import api from './api';
import { useState} from 'react';
import Loader from './Loader';
import Card from './Card';

const App = () => {

  const [users, setUsers] = useState(null);

  const getUsers = async () =>{
    setUsers([]);
    const res = await api.get('/users',{
      params:{query:1},
    })
    console.log(res.data.data); 
    setUsers(res.data.data);
  }

  return (
    <>
      <header>
        <ul>
          <li>
            <h3 className="header-content" onClick={()=>{setUsers(null)}}>Profile Card</h3>
          </li>
          <li>
          <button className="header-content" onClick={getUsers}>Get Users</button>
          </li>
        </ul>
      </header>
      <div className="grid">
        {users?users.length===0 ? <Loader/> : users.map((user)=><Card user={user}/>):<div>Click Get Users</div>}
      </div>
    </>
  );
}

export default App;
