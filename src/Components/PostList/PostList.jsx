import Post from "../Post/Post"
import "./PostList.css"


const PostList = ({posts}) => {
  const postArray = posts.map((post) => {
      return <Post key={post} title={post.titles} image={post.images} date={post.dates} info={post.info} />
  })
  return (
    <div className="posts">
      {postArray}
    </div>
  )
}

export default PostList;