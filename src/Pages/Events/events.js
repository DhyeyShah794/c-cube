import React, { Component } from 'react';
import PostList from '../../Components/PostList/PostList';
import Nav from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import './events.css';

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
      <h1 style={{ paddingTop: '100px', textAlign: 'center' }}>Loading</h1> :
      (
        <div className="events">
          <Nav />
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