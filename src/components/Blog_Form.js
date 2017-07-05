

import React, { Component } from 'react';

import 'bulma/css/bulma.css';

class Blog_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  blog_title:'',	
      text: '',
	  author:'',
	  imageURL:'',
	  message:''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleblog_title_changes = this.handleblog_title_changes.bind(this);
    this.handleImageURLChange = this.handleImageURLChange.bind(this);
	
 
  }
  
 
  
 handleAuthorChange(e) {
    this.setState({ author: e.target.value });
	this.state.message="";
  }

  handleblog_title_changes(e) {
    this.setState({ blog_title: e.target.value });
	this.state.message="";
	if(this.state.blog_title.length > 1)
	{
		this.state.message="";
	}
  }

  handleImageURLChange(e) {
    this.setState({ imageURL: e.target.value });
	if(this.state.imageURL.length > 1)
	{
		this.state.message="";
	}
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
	this.state.message="";
	if(this.state.text.length > 1)
	{
		this.state.message="";
	}
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
	 
    e.preventDefault();
    let text = this.state.text.trim();
	let author = this.state.author.trim();
	let blog_title = this.state.blog_title.trim();
	let imageURL = this.state.imageURL.trim();
    
	if(!text || !author || !blog_title || ! imageURL)
	{
		this.state.message="Please Fill All Details To Save blog";
		return;
	}

    this.props.onBlogSubmit(
      {
        text: text,
		author:author,
		imageURL:imageURL,
		blog_title:blog_title
      });

    this.setState({ text: '' });
	this.setState({ author: '' });
this.setState({ imageURL: '' });
this.setState({ blog_title: '' });
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.onLogout();
  }

  render() {
    return (
      <article className="media">
      <div className="media-content">
	   <div className="field">
             <p className="control has-icons-left">
            <input className="input" type="text"
              onChange={this.handleblog_title_changes}
              placeholder="Blog Title"   value={this.state.blog_title} />
			
			 
			 
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </p>
          </div>
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder='Blog Description...'
                value={this.state.text}
                onChange={this.handleTextChange}
                onKeyPress={this.handleKeyPress}
              />
            </p>
          </div>
		   <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text"
              onChange={this.handleAuthorChange}
              placeholder="Author name"  value={this.state.author}
			 />
			 
			 
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text"
              onChange={this.handleImageURLChange}
              placeholder="Image URL (ex:images/blog_pic1 or http:// full imageurl)" value={this.state.imageURL} />
			   
			  
				  
            <span className="icon is-small is-left">
              <i className="fa fa-image"></i>
            </span>
          </p>
        </div>
           <div className="result bg-danger" >{ this.state.message }</div><br/>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                 <a
                className="button is-info"
                type='submit'
                value='Post'
				
                onClick={this.handleSubmit}
              >Submit</a>
                </div>
              </div>

             
          </nav>
        </div>

      </article >
    )
  }
}

export default Blog_Form;