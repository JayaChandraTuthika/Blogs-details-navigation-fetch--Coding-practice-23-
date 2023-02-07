import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, author, title, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="blog-item-container">
      <img src={imageUrl} alt="blog" className="blog-image" />
      <div className="text-container">
        <p className="topic">{topic}</p>
        <h1 className="blog-title">{title}</h1>
        <p className="blog-description">{author}</p>
      </div>
    </Link>
  )
}

export default BlogItem
