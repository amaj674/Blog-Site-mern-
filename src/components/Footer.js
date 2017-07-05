
import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class Footer extends Component {

  render() {
    return (
 
   <footer className="footer">
   <hr/> 
  <div className="container">
  <div className="row">
  <div className="col-lg-1">
 
  </div>
  <div className="col-lg-3">
 <div className="row">
 <article className="media">
       
        <div className="media-content">
          <div className="content">
		   <p className="image is-260*136">
            <img alt="Avatar" src="images/Blog_Map.jpg" />
          </p>
		  </div>
		  </div>
		  </article>
  </div>
  
  <div className="row">
    <div className="col-lg-4">
	<b>Follow US</b>
	</div>
	 <div className="col-lg-8">
   <div className="nav-left"><a target="_blank" href="http://www.facebook.com" className="nav-item "><img className="img-circle" src="images/facebook_Blk_icon.png"></img></a><a target="_blank" href="http://www.linkedin.com" className="nav-item"><img src="images/Linkedin_Blk_icon.png"></img></a><a target="_blank" href="http://www.twitter.com" className="nav-item"><img src="images/Twitter_Blk_icon.png"></img></a><a target="_blank" href="http://www.youtube.com" className="nav-item"><img src="images/Youtube_Blk_icon.png"></img></a></div>
    
	 </div>
  </div>
 
  </div>
  <div className="col-lg-4">
  <center><b>Quick Link </b>
  
  </center>
 <div className=""><a target="_blank" className="nav-item ">Existing Memebers?Login</a><a target="_blank"  className="nav-item">Blogs</a><a target="_blank"  className="nav-item">Webinars</a><a target="_blank"  className="nav-item">Videos</a> <a target="_blank"  className="nav-item">ebooks</a> </div>
  
  </div>
  

  <div className="col-lg-3">
  <div className="row"><center><b>Download Free Book </b> </center> </div>
      <div className="media-content">
	   <div className="field">
	     <p className="control has-icons-left">
            <input className="input" type="text"
                placeholder="Name"  />
			<span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </p>
      </div>
	  <div className="field">
	     <p className="control has-icons-left">
            <input className="input" type="text"
                placeholder="email"  />
			<span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </p>
      </div>
	   <div className="field">
	  <p className="control">
          <button className="button is-warning">
           
            <span>Download Book</span>
          </button>
        </p>
		 </div>
	  </div>
	 
 
  </div>
 
  </div>
  <div className="row">
  <center>
  2017 @ All Rights Reserved
  </center>
  </div>
  </div>
</footer>
    )
  }
}

export default Footer;