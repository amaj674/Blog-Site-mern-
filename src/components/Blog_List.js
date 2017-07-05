

import React, { Component } from 'react';
import Blog from './Blog';

import 'bulma/css/bulma.css';

class Blog_List extends Component {
  render() {
    let blogNodes = this.props.data.map(blog => {
      return (
        <Blog
          author={blog.author}
          uniqueID={blog['_id']}
          key={blog['_id']}
          imageURL={blog['imageURL']}
		  blog_title={blog['blog_title']}
		    posted_on={blog['posted_on']}
          onBlogDelete={this.props.onBlogDelete}
        >
          {blog.text}
	
        </Blog>
      )
    })
    return (
      <div>
        {blogNodes}
      </div>
    )
  }
}

export default Blog_List;