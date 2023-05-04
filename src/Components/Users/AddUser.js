import React,{useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
const AddUser=(props)=>{
    const[enterUseranme,setEnteredUsername]=useState('')
    const[enterAge,setEnterAge]=useState('')
    const addUserhandler=(event)=>{
          event.preventDefault();
          if(enterUseranme.trim().length===0 || enterAge.trim().length===0){
            return;
          }
          if(enterAge<1){
            return;
          }
          props.addUser(enterUseranme,enterAge);
          setEnteredUsername('');
          setEnterAge('');
    }
    const usernamechangehandeler=(event)=>{
          setEnteredUsername(event.target.value)
    }
    const agechangehandler=(event)=>{
       setEnterAge(event.target.value)
    }

    return(
    <Card className={classes.input} >
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username</label>
          <input  id='username' type='text' value={enterUseranme} onChange={usernamechangehandeler}></input>
           <label htmlFor="age">Age(Years)</label>
          <input id='age'  type='number' value={enterAge}  onChange={agechangehandler}></input>
          <Button type="submit">Add User</Button>
    </form>
    </Card>
     
    )
}
export default AddUser;