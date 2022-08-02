import userEvent from "@testing-library/user-event"
import { useEffect, useState } from "react"
  
const    Users  = () => {
    const [User, setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                response.json()
                    .then(json => {
                        setUser(json)
                    })
                    .catch()
            })
            .catch((e) => {})
    }, [])

    return (
        <div> 
            {User.length > 0 && <div  class="row" > 
                {User.map((User) => { 
                     
                    return  < div class=" card col-sm-3 " > 
                   
                   <ul class="list-group list-group-flush">
    <li class="list-group-item"> <h5> {User.name}</h5>  {User.email}</li>
    <li class="list-group-item"> {User.phone}</li>
    <li class="list-group-item"> {User.website}</li>
    <li class="list-group-item"> {User.company.name}</li>
     
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
                  </div>
               
                  
                  
                   
                })}
        </div>
   
         }
     
       </div>
    
    )
}
 
export default Users