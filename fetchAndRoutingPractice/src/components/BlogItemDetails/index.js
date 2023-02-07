import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedBlog = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      title: data.title,
      content: data.content,
      topic: data.topic,
    }
    console.log(updatedBlog)
    this.setState({blogDetails: updatedBlog, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, avatarUrl, imageUrl, author, content} = blogDetails

    return (
      <>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={150} width={150} />
        ) : (
          <div className="blog-details-container">
            <h1 className="blog-details-heading">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt="avatar" className="avatar-image" />
              <span>{author}</span>
            </div>
            <img src={imageUrl} alt={title} className="blog-main-image" />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
