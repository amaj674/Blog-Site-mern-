

import React, { Component } from 'react';
import React_h from 'react';
import axios from 'axios';
import Blog_List from './Blog_List';
import Blog_Form from './Blog_Form';
import Login from './Login';


import 'bulma/css/bulma.css';

class Add_Blog extends Component {

  constructor(props) {
    super(props);

    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
    const data = JSON.parse(localStorage.getItem('blogs')) || [];
    this.current_page_to_show=localStorage.getItem('current_page_to_show');
    this.state = { 
      data: data,
      userInfo: userInfo
    };

    this.loadBlogsFromServer = this.loadBlogsFromServer.bind(this);
    this.handleBlogSubmit = this.handleBlogSubmit.bind(this);
    this.handleBlogtDelete = this.handleBlogtDelete.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.enum_for_render_page={
		home:1,
		invencement:2,
		finance:3,
		faimily:4,
		credit:5,
		other:6,
		more:7,
		rupee:8
	}
  }

  loadBlogsFromServer() {
    axios.get(this.props.url).then( res => {
      localStorage.setItem('blogs', JSON.stringify(res.data));
      this.setState({ data: res.data });
    })
  }

  handleBlogSubmit(blog) {
    

    let blogs = this.state.data;
    blog._id = Date.now();
    let newBlog = blogs.concat([blog]);
    this.setState({ data: newBlog });

    axios.post(this.props.url, blog)
      .catch(err => {
        console.error(err);
      });
  }

  handleLogin(loginInfo) {
    const userInfo = {
            author: loginInfo.author, 
            imageURL: loginInfo.imageURL,
            twitter: loginInfo.twitter
          };

    this.setState({ userInfo: userInfo });

    axios.post(`${this.props.url}/login`, loginInfo)
      .then( res => {
        console.log('Logged in!');
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        
      })
      .catch( err => {
        console.error(err);
      })
  }

  handleLogout(e) {
    
    axios.post(`${this.props.url}/logout`)
      .then( res => {
        localStorage.removeItem('userInfo');
        this.setState({ userInfo: {} });
        console.log('Logged out!');
      })
      .catch( err => {
        console.error(err);
      })
  }

  handleBlogtDelete(id) {

    let blogs = this.state.data;

    let newBlog = blogs.filter( (t) => {
      return t._id !== id 
    });

    this.setState({ data: newBlog });

    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Blog deleted');
      })
      .catch( err => {
        console.error(err);
      })
  }

  componentDidMount() {
    this.loadBlogsFromServer();
  window.fetch_blog_call= setInterval(this.loadBlogsFromServer, this.props.pollInterval);
  }
 debugger;
  render(_current_page_to_show) {
	 
	if(!_current_page_to_show)
	{
		_current_page_to_show=(this.props.show_page?parseInt(this.props.show_page):1);
	}		
	if(_current_page_to_show ===1)
	{
		if(!window.fetch_blog_call)
		{
			window.fetch_blog_call= setInterval(this.loadBlogsFromServer, this.props.pollInterval);
		}
	}
	else
	{
		for(var i=0; i<100; i++)
        {
           window.clearInterval(i);
        }
		delete window.fetch_blog_call;
		
	}
	
switch (_current_page_to_show)
{
	case this.enum_for_render_page.home:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
 <div className="col-lg-1"></div>
 <div className="col-lg-7">
        <Blog_List 
          data={ this.state.data }
          onBlogDelete={ this.handleBlogtDelete }
        />
        <hr/>
        <Blog_Form 
          imageURL={ this.state.userInfo.imageURL }
          onBlogSubmit={ this.handleBlogSubmit }
          onLogout={ this.handleLogout }
        />
        <br/>
        <Login 
          onLogin={ this.handleLogin }
        />
		</div>
		<div className="col-lg-1"></div>
		<div className="col-lg-3">
		<div className="row">
		<center><h1 className="blog_title blue_color">Popular Posts</h1></center>
		<br/>
        </div>
		<br/>
       <div className="row">
		<div className="col-lg-12">
		<article className="media">
       
        <div className="media-content">
          <div className="content">
		   <p className="image is-260*136">
            <img alt="Avatar" src="images/Blog_img.jpg" />
          </p>
		 <div className="blue_color">what pepole consider themseleves?</div>
		  <span className="gray_color">70% investors are "Asset Poor" What about You?</span>
		 
		  </div>
		  </div>
		  </article>
		</div>
        </div>
			<br/>
		<div className="row">
		<div className="col-lg-12">
		<article className="media">
       
        <div className="media-content">
          <div className="content">
		   <p className="image is-260*136">
            <img alt="Avatar" src="images/Blog_img1.jpg" />
          </p>
		   <div className="blue_color">what pepole consider themseleves?</div>
		  <span className="gray_color">70% investors are "Asset Poor" What about You?</span>
		  <br/>
		  </div>
		  </div>
		  </article>
		</div>
        </div>
		<br/>
       <div className="row">
		<div className="col-lg-12">
		<article className="media">
       
        <div className="media-content">
          <div className="content">
		   <p className="image is-260*136">
            <img alt="Avatar" src="images/Blog_img2.jpg" />
          </p>
		 <div className="blue_color">what pepole consider themseleves?</div>
		  <span className="gray_color">70% investors are "Asset Poor" What about You?</span>
		 
		  
		  </div>
		  </div>
		  </article>
		</div>
        </div>
		<br/>
       <div className="row">
		<div className="col-lg-12">
		<article className="media">
       
        <div className="media-content">
          <div className="content">
		   <p className="image is-260*136">
            <img alt="Avatar" src="images/Blog_img3.jpg" />
          </p>
		 <div className="blue_color">what pepole consider themseleves?</div>
		  <span className="gray_color">70% investors are "Asset Poor" What about You?</span>
		 
		  </div>
		  </div>
		  </article>
		</div>
        </div>
       
       
		</div>
		</div>
        </div>
      </section>
    )
	break;
	case this.enum_for_render_page.invencement:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">InvestMent</h1></center>
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	break;
	case this.enum_for_render_page.invencement:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">InvestMent</h1></center>
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	break;
	case this.enum_for_render_page.finance:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">Finance</h1></center>
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	break;
	case this.enum_for_render_page.faimily:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">Faimily</h1></center>
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	break;
	case this.enum_for_render_page.credit:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">Credit</h1></center>
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	break;
	case this.enum_for_render_page.other:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">other</h1></center>
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	break;
	case this.enum_for_render_page.more:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">More</h1></center>
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	break;
	case this.enum_for_render_page.rupee:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">Rupee</h1></center>
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	break;
	case 10:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	break;
	default:
	return (
      <section className="section">
        <div className="container">
 <div className="row">
       
		</div>
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    )
	
	break;
}	
    
  }
}

export default Add_Blog;