import axios from "axios"
import { useState } from "react"

const User = () => {
    const [post,setPost] = useState({
        title: '',
        body: ''
    })
    const handleInput = (event) => {
        setPost({...post,[event.target.name]:event.target.value })
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',{post})
        .then(response => console.log(response))
        .catch(error => console.log(error)
        )
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            title: <input type="text" name="title" onChange={handleInput} />  <br /> <br />
            post: <input type="text" name="body" onChange={handleInput}/> <br /><br />
            <button className="btn">Submit</button>
        </form>

        {post.map((event) =>(
            <div>
                <h1>{event.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default User