import React,{useState} from 'react';
import logo from './logo.svg';
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
    <div className="App">
      <AddUser addUser={addUserhandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
} 

export default App;
