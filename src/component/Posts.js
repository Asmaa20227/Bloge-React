import { useEffect, useState } from "react"
  
const  Post  = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                response.json()
                    .then(json => {
                        setPosts(json)
                    })
                    .catch()
            })
            .catch((e) => {})
    }, [])

    return (
        <div> 
            {posts.length > 0 && <div  class="row" > 
                {posts.map((post) => { 
                    return     < div class=" card col-sm-3 " >  <div class="card-body">  
                       <h5 class="card-title">{post.title} </h5> 
                     <p class="card-text"> {post.body}</p>  </div> </div> 
                   
                })}
        </div>
   
         }
     
       </div>
    
    )
}
 
export default  Post