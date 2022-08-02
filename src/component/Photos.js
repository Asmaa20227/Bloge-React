import { useEffect, useState } from "react"
  
const   Photos  = () => {
    const [Photo, setphoto] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                response.json()
                    .then(json => {
                        setphoto(json)
                    })
                    .catch()
            })
            .catch((e) => {})
    }, [])

    return (
        <div> 
            {Photo.length > 0 && <div  class="row" > 
                {Photo.map((photo) => { 
                     
                    return  < div class=" card col-sm-3 " > 
                    <img class="card-img" src={photo.url} alt="Card image"></img>
                   
                    <div class="card-body">{photo.title}
                      
                    </div>
                  </div>
               
                  
                  
                   
                })}
        </div>
   
         }
     
       </div>
    
    )
}
 
export default Photos