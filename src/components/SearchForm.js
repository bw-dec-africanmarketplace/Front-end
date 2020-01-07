import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
            axios
                .get('https://app.swaggerhub.com/apis/ajohnson1031/AMP_Backend/1.0')
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
                <UserCard avatar_url={e.image} id={e.id} email={e.email} username={e.username} owner_first_name={e.fname} owner_last_name={e.lname} business_name={e.business.name} />
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