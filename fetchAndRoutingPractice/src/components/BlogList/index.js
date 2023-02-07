import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <ul className="blogs-list-container">
        {blogsList.map(blog => (
          <BlogItem blogDetails={blog} key={blog.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
