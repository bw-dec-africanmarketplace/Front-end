import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AxiosWithAuth from '../utilities/AxiosWithAuth';
import UserCard from './UserCard';
import SearchForm from  './SearchForm';




export default function UserList(){


    const [users, setUsers] = useState();
    const [searchItems, setSearchItems] = useState('');
    const [searchResults, setSearchResults] = useState(users);

    const handleChange = event =>{
        setSearchItems(event.target.value);
    }

    useEffect(()=>{

            axios
                .post("https://african-marketplace-backend.herokuapp.com/api/login", {
                    username: "admin",
                    password: "gr33ng0bl1n"
                })
                .then(res => {

                    localStorage.setItem("token", res.data.token);
                    
                });
            

         const getUsers = () =>{
            AxiosWithAuth()
                .get('https://african-marketplace-backend.herokuapp.com/api/users')
                .then(res =>{
                    console.log('Hello', res.data);
                    
                    const results = res.data.filter(character => {
                    return character.username.toLowerCase().includes(searchItems.toLowerCase());//object.values
                    });

                    setUsers(results);
                })
                .catch(err =>{
                    console.error('Error', err);
                });
         }
        console.log(users);

         getUsers();
         setSearchResults(users);

    }, [searchItems]);

    if(!users ){
           return(
            <div>
                <SearchForm searchItems={searchItems} handleChange={handleChange}/>
                <div>Loading!</div>
            </div>
           )

        }

    return(
        
        <div>
            <div>
                <SearchForm searchItems={searchItems} handleChange={handleChange}/>
            </div>

            {users && users.map(e =>{
                console.log(e);
                return <UserCard  id={e.id} username={e.username} owner_firstname={e.fname} owner_lastname={e.lname} business_name={e.business_name} />
            
            })}
           
        </div>
    )
}