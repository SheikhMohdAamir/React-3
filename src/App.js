import React, { useState}  from 'react';
import UserAdded from './My Components/User/UserAdded';
import UserList from './My Components/User/UserList';

function App() {
  const [object, setObject] = useState([]);

  const userHandler=(username, age)=>{
      setObject((prev)=>[...prev, {id:Math.random().toString(), username: username, age: age}])
  }

  return (
    <div >
      <UserAdded addingUser={userHandler}/>
      <UserList users={object} />
    </div>
  );
}
export default App;