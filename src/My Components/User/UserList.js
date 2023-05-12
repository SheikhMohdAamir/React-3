import React from 'react'
import Card from '../Ui/Card'
import classes from './UserList.module.css'


const UserList = (props) => {
  return (
    <Card className={classes.users}>
        <ul>
            {props.users.map((i)=>(<li key={i.id}>{`Name: ${i.username}, Age: ${i.age}, College: ${i.college}`}</li>))}
        </ul>
    </Card>
  )
}

export default UserList
