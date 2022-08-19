import Post from "../Post/Post"
import "./posts.css"

fetch('https://opensheet.elk.sh/1ZPxRIYghouljWjW7lFHa7yvkmO88INpQsiyxqvmAtsc/1')
	.then(response => {return response.json()})
	.then(posts =>{this.setState({posts: posts})})

export default function Posts() {
  return (
    <div className="posts">
      
    </div>
  )
}
