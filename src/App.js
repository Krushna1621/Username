import React,{useState,Fragment} from 'react';

import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
function App() {
  const[userList,setUserlist]=useState([])
  const addUserhandler=(uName,uAge)=>{
      setUserlist((prevUserList)=>{
         return[...prevUserList,{name:uName, age:uAge ,key:Math.random().toString()}]

      }) 
  }
  return (
    <Fragment>
      <AddUser addUser={addUserhandler}></AddUser>
      <UserList users={userList}></UserList>
    </Fragment>
  );
} 

export default App;
