import React,{ useState } from 'react';
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  const [users, setUsers] = useState([]);
  const getUser = (uName  ,uAge) =>{
    setUsers([...users, {'name':uName , 'age':uAge ,'id':Math.random().toString()}])
  }
  return (
    <div>
      < AddUser getdata = {getUser}/>
      < UserList users={users}  />
    </div>
  );
}

export default App;
