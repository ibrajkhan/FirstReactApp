import React, {useState} from 'react';
import Tweet from './Tweet';
 
 
function App(){
  const [users, setUsers] = useState([
    {name:'Ibraj khan', message:"Hello world", like : "1M" },
    {name:'Mosh hemadani', message:"programing world", like : "700k" },
    {name:'Mike Dane', message:"what's up ", like : "800k" }
  ]);
  

   
  return (
    <div className='app'>
      {users.map(user =>(
        <Tweet name = {user.name} message = {user.message} like = {user.like}/>
         
      ) )}
       
     
    </div>
  );
  
}
export default App;
