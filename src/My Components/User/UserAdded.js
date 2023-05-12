import React, {useState} from 'react'
import Card from '../Ui/Card';
import classes from './UserAdded.module.css';
import Button from '../Ui/Button';
import ErrorModal from '../Ui/ErrorModal';

const UserAdded = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [college, setCollege] = useState('');
    const [modal, setModal] = useState();


    const submitHandler =(event)=>{
        event.preventDefault();

        if(username.trim().length===0 || age.trim().length===0 || college.trim().length===0){
          setModal({
            title:'Invalid Input',
            message:'Please enter a valid username, college and age (non-empty values)'
          })
          return
        }
        else if(+age<1){
          setModal({
            title:'Invalid Age',
            message:'Please enter a valid age (> 0)'
          })
        }
        else{
        
        props.addingUser(username, age, college);
        setUsername('');
        setAge('');
        setCollege('');
      }
    }

    const usernameHandler=(event)=>{
      setUsername(event.target.value);
    }
    const ageHandler=(event)=>{
      setAge(event.target.value);
    }
    const collegeHandler=(event)=>{
      setCollege(event.target.value)
    }
    const errorHandler=()=>{
      setModal(null);
    }

  return (
    <>
    {modal && ( <ErrorModal title={modal.title} message={modal.message}  onConfirm={errorHandler} />)}
   
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' value={username} onChange={usernameHandler}/>
        <label htmlFor='college'>College Name</label>
        <input type='text' id='college' value={college} onChange={collegeHandler}/>
        <label htmlFor='age'>Age</label>
        <input type='number' id='age'  value={age} onChange={ageHandler}/>

        <Button type='submit'>Submit</Button>

      </form>
    </Card>
    </>
  )
}

export default UserAdded;
