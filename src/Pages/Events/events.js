import React, { Component } from 'react';
import PostList from '../../Components/PostList/PostList';
import Footer from '../../Components/Footer/footer';
import './events.css';
import { SyncLoader } from 'react-spinners';

class Events extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://opensheet.elk.sh/1ZPxRIYghouljWjW7lFHa7yvkmO88INpQsiyxqvmAtsc/1')
      .then(response => { return response.json() })
      .then(posts => { this.setState({ posts: posts }) })

  }

  render() {
    const { posts } = this.state;
    return !posts.length ?
      (<div style={{height: "100vh", textAlign: 'center'}}><h1 style={{ paddingTop: '100px'}}>Loading...</h1><br></br><SyncLoader size={20} color="#fff"/></div>) :
      (
        <div className="events">      
          <div className="events-container">
            <h1 className="events-title">Past events</h1>
            <PostList posts={posts} />
          </div>
          <Footer />
        </div>
      )

  }
}

export default Events;