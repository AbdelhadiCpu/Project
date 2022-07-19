import { render } from '@testing-library/react'
import  Axios  from 'axios'
import React from 'react'
import { useState } from 'react'
import './search.css'


function Search () {

    
    //const [userdata, setUserData] = useState([])
    const userdata =[]
    const [query,setQuery]  = useState('')

    const getSearch =()=>{
        Axios.post('http://localhost:3001/home/search',{
           

        }).then((response)=>{
            console.log(response)
            const L = response.data.usersdata
            console.log(L.length)
            for(let i=0;i<L.length;i++){
                
                userdata.push({

                    lastname: L[i].lastname,
                    firstname: L[i].firstname,
                    establishment: L[i].establishment
                })
            }
            return userdata
           
            
        }).then((userdata)=>{
            userdata.filter(user=>{
                console.log(query)
                if(query == ''){
                    return user
                }else if(user.firstname.toLowerCase().startsWith(query.toLowerCase())){
                    return user
                }
                console.log(user)
            }).map((user, index) => {
                
                return <h2>{user}</h2>
               


            })
        })
    }
   

   



    return(
        <div>
            
            <input placeholder='Enter' onChange={(event)=>setQuery(event.target.value)}/>
            <button  onClick={ getSearch}>Search</button>
            
            <div>{userdata.map((user) => <h2>{user}</h2>)}</div>

          
            
            


        </div>
        

    )
}

export default Search