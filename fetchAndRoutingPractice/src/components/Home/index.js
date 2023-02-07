import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

// const blogsList = [
//   {
//     id: 1,
//     title: 'My first post',
//     description: 'A high quality solution beautifully designed for startups',
//     publishedDate: 'Aug 2nd',
//   },
//   {
//     id: 2,
//     title: 'My second post',
//     description:
//       'A high quality solution beautifully designed for startups and Bussiness schools',
//     publishedDate: 'Mar 1st',
//   },
//   {
//     id: 3,
//     title: 'My third post',
//     description: 'A high quality solution beautifully designed for startups',
//     publishedDate: 'Jan 2nd',
//   },
//   {
//     id: 4,
//     title: 'My fourth post',
//     description:
//       'A high quality solution beautifully designed for startups and Bussiness schools. ',
//     publishedDate: 'Dec 24th',
//   },
//   {
//     id: 5,
//     title: 'My fifth post',
//     description: 'A high quality solution beautifully designed for startups',
//     publishedDate: 'Nov 10th',
//   },
// ]

class Home extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedDataList = data.map(each => ({
      id: each.id,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogsList: updatedDataList, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <BlogList blogsList={blogsList} />
        )}
      </div>
    )
  }
}

export default Home
