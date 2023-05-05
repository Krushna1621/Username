import React,{useState,useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";
const AddUser=(props)=>{
    const nameInputRef=useRef();
    const ageInputRef=useRef();
   /* const[enterUseranme,setEnteredUsername]=useState('')
    const[enterAge,setEnterAge]=useState('')*/
    const[error,setError]=useState()
    const addUserhandler=(event)=>{
          event.preventDefault();
          const enterName=nameInputRef.current.value;
          const enterUserAge=ageInputRef.current.value;
          if(enterName.trim().length===0 || enterUserAge.trim().length===0){
            setError({
              title:'Invalid input',
              message:'Please Enter valid name and age (non-empty values).'
            })
            return;
          }
          if(enterUserAge<1){
            setError({
              title:'Invalid Age',
              message:'Please Enter valid Age(>0).'
            })
            return;
          }
          props.addUser(enterName,enterUserAge);
          nameInputRef.current.value='';
          ageInputRef.current.value='';
          //setEnteredUsername('');
          //setEnterAge('');
    }
   /* const usernamechangehandeler=(event)=>{
          setEnteredUsername(event.target.value)
    }
    const agechangehandler=(event)=>{
       setEnterAge(event.target.value)
    }*/
    const errorhandler=()=>{
         setError(null)
    }

    return(
      <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorhandler}></ErrorModal>}
      <Card className={classes.input} >
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username</label>
          <input  id='username'
           type='text' 
          //value={enterUseranme} 
          //onChange={usernamechangehandeler}
          ref={nameInputRef}></input>
           <label htmlFor="age">Age(Years)</label>
          <input id='age'  type='number' 
           //value={enterAge} 
           //onChange={agechangehandler}
           ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
      </form>
      </Card>
    </Wrapper>
    
     
    )
}
export default AddUser;