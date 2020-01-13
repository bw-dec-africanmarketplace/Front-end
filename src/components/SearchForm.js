import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AxiosWithAuth from '../utilities/AxiosWithAuth'
import UserCard from './UserCard';

export default function SearchForm({searchTerms, handleChange}){

    const [favUser, setFavUser] = useState([]);
    const [userTerms, setUserTerm] = useState('');
    const [userResults, setUserResults] = useState(favUser)

    const formChange = event => {
        setUserTerm(event.target.value);
    }
    useEffect(() => {
        const newUsers = () =>{
            AxiosWithAuth()
                .get('https://african-marketplace-backend.herokuapp.com/api/users')    
                .then(res =>{
                    console.log(res.data);
                    setFavUser(res.data);
                })
                .catch(err =>{
                    console.error('Error', err)
                });
        };
        console.log(favUser)
        const people = favUser.filter(e => {
            return e.username.toLowerCase().includes(userTerms.toLowerCase());
        });
        newUsers();
        setUserResults(people);
        
    }, [userTerms])

    return(
        <section>
            {userResults.map(e => (
                <UserCard  id={e.id} username={e.username} owner_firstname={e.fname} owner_lastname={e.lname} business_name={e.business_name} />
            ))}

            <form>
        
                <input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="search"
                    onChange={handleChange, formChange}
                    value={searchTerms}
                    />
            </form>
        
        </section>

    )
}