import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import SearchForm from  './SearchForm';

export default function UserList(){


    const [users, setUsers] = useState();
    const [searchItems, setSearchItems] = useState('');
    const [searchResults, setSearchResults] = useState();

    const handleChange = event =>{
        setSearchItems(event.target.value);
    }

    useEffect(()=>{
         const getUsers = () =>{
            axios
                .get('https://app.swaggerhub.com/apis/ajohnson1031/AMP_Backend/1.0')
                .then(res =>{
                    console.log(res.data);
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
        // setSearchResults(results);

    }, [searchItems]);

    if(!users ){
           return(
            <div>
                <SearchForm searchItems={searchItems} handleChange={handleChange}/>
                <div>loading</div>
            </div>
           )

        }

    return(
        
        <div>
            <SearchForm searchItems={searchItems} handleChange={handleChange}/>

            {users && users.map(e =>{
                console.log(e);
                // return <UserCard avatar_url={e.image} id={e.id} email={e.email} username={e.username} owner_first_name={e.fname} owner_last_name={e.lname} business_name={e.business.name} />
                return <UserCard  id={e.id} email={e.email} username={e.username} />
            })}
           
        </div>
    )
}