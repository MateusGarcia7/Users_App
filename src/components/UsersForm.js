import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected, setUserSelected }) => {

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [birthday, setBirthday] = useState ("")

useEffect (() => {
    if(userSelected){
        setFirstName(userSelected.first_name)
        setLastName(userSelected.last_name)
        setEmail(userSelected.email)
        setPassword (userSelected.password)
        setBirthday(userSelected.birthday)
    }
 
}, [userSelected] )

const submit = e => {
    e.preventDefault();
    const user = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        birthday: birthday
    }
    if(userSelected){
        console.log("actualizo")
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
        .then (()=> getUsers ())
    }
    else{
        axios.post( 'https://users-crud1.herokuapp.com/users/', user)
        .then (() => {

            getUsers()
            setUserSelected(null)
        });

        }
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
    }
 
   


    return (
        <form onSubmit={submit} > 
           <div className="input_container">
           <i id='icons' class="fa-solid fa-user"></i>
               <label htmlFor="first_name"></label>
               <input className='input' type="text" placeholder='First Name'
                      onChange={e => setFirstName(e.target.value) }
                      value={firstName}
               />
               <div className="input_container">
               <label htmlFor="last_name"></label>
               <input className='input_last_name' type="text" placeholder='Last Name'
                      onChange={e => setLastName(e.target.value) }
                      value={lastName}
               />
           </div>
           </div>
           
           <div className="input_container">
          
               <label htmlFor="email"></label>
               <i id='icons' class="fa-solid fa-envelope"></i>  <input className='input_' type="text" placeholder='Email'
                      onChange={e => setEmail(e.target.value) }
                      value={email}
               />
           </div>
           <div className="input_container">
           <i id='icons' class="fa-solid fa-lock"></i>
               <label htmlFor="password"></label>
               <input className='input_' type='password' placeholder='Password' 
                      onChange={e => setPassword(e.target.value) }
                      value={password}
               />
           </div>
           <div className="input_container">
           <i id='icons' class="fa-solid fa-cake-candles"></i>
               <label htmlFor="birthday"></label>
               <input className='input_' type="date" 
                      onChange={e => setBirthday(e.target.value) }
                      value={birthday}
               />
           </div>
           <button className='submit'>Upload</button>
        </form>
    );
};

export default UsersForm;