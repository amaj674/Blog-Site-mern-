

import React, { Component } from 'react';
import marked from 'marked';

import 'bulma/css/bulma.css'

class Blog extends Component {

  constructor(props) {
    super(props);
 
    this.deleteBlog = this.deleteBlog.bind(this);
  }

  deleteBlog(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onBlogDelete(id);
    console.log('oops deleted');
  }

  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
  
   return (
	
      <div className="box">
      <article className="media">
       
        <div className="media-content">
          <div className="content">
          <p className="blog_title blue_color">{this.props.blog_title}</p>
		  <p className="blue_color">Posted By : <span className="is-small gray_color">{this.props.author} </span>  ON <span className="is-small gray_color">{this.props.posted_on} </span>   </p>
		  <figure className="media-left">
          <p className="image is-780*343">
            <img alt="Avatar" src={this.props.imageURL} />
          </p>
        </figure>
            <br />
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
                          
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div>
          <button
            onClick={ this.deleteBlog } 
            className="delete"
            ></button>
        </div>
      </article>
      </div>
    )
  }
}

export default Blog;