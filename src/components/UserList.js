import React from 'react';



const UserList = ({users, setUserSelected, deleteUser} ) => {
    return (
        <div className='container'>
        <ul>
            {
            users.map (user => (
              <li key= {user.id} className='user_list'>
            <h3>  {user.first_name}   {user.last_name} </h3>
                <p> {user.email} </p>
                <i id='icon' class="fa-solid fa-cake-candles"></i> <p className='birthday'>{user.birthday} </p> 
                <div className='button_container'>
                <button className='button' onClick={()=> deleteUser(user.id)}><i class="fa-solid fa-trash"></i></button>
                <button className='button_' onClick={() => setUserSelected(user)}>
                <i class="fa-solid fa-pencil"></i>
                </button>
                </div>
              </li>
            ))
        }
        </ul>
       
        </div>
    );
};

export default UserList;