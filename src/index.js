import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router';
import Add_Blog from './components/Add_Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';




function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var _show_page=getParameterByName('page');
class Home extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
    <Add_Blog 
      url='/api/blogs'
      pollInterval={8000}
	show_page={_show_page}
    />
    <Footer />
  </div>);
    }
}
//about Page
class about extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
    <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">About Page</h1></center>
		</div>
		 
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    <Footer />
  </div>);
}
}

//Memeber Benifits
class memberbenifits extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
    <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">Memeber Benifits Page</h1></center>
		</div>
		 
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    <Footer />
  </div>);
}
}

//Resourcess
class resources extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
    <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">Resources Page</h1></center>
		</div>
		 
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    <Footer />
  </div>);
}
}

//Resourcess
class contact extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
    <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">contact Page</h1></center>
		</div>
		 
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    <Footer />
  </div>);
}
}
//investments
class investments extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
    <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">investments Page</h1></center>
		</div>
		 
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    <Footer />
  </div>);
}
}
//investments
class finance extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
    <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">finance Page</h1></center>
		</div>
		 
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    <Footer />
  </div>);
}
}

//credit
class credit extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
    <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">credit Page</h1></center>
		</div>
		 
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    <Footer />
  </div>);
}
}

//credit
class faimily extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
    <section className="section">
        <div className="container">
 <div className="row">
       <center><h1 className="blog_title blue_color">Faimily Page</h1></center>
		</div>
		 
		 <p className="image is-260*136">
            <img alt="Avatar" src="images/page_is_under_construction.png" />
          </p>
        </div>
      </section>
    <Footer />
  </div>);
}
}

//other
class other extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
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
    <Footer />
  </div>);
}
}

//other
class more extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
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
    <Footer />
  </div>);
}
}
//other
class rupee extends Component {
    render(){
        return (<div>
 
    <NavBar />
    <Header />
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
    <Footer />
  </div>);
}
}
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
		<Route path="/home" component={Home} />
        <Route path="/resources" component={resources} />
		<Route path="/about" component={about} />
		<Route path="/memberbenifits" component={memberbenifits} />
		<Route path="/contact" component={contact} />
		<Route path="/blog" component={Home} />
		<Route path="/rupee" component={rupee} />
		<Route path="/more" component={more} />
		<Route path="/other" component={other} />
		<Route path="/faimily" component={faimily}/>
		<Route path="/credit" component={credit} />
		<Route path="/finance" component={finance} />
		<Route path="/investments" component={investments} />
		
		
       
    </Router>
)

ReactDOM.render(routes, document.getElementById("root"));
function _set_active_li()
{
var _get_hash=window.location.hash;
if(_get_hash)
{
	if(_get_hash.length > 2)
	{
	var _path=_get_hash.substring(2);
	if(_path)
	{
		var d = document.getElementById("id_li_"+_path);
		    if(d)d.className += " active";
	}
	else
	{
		var d = document.getElementById("id_li_home");
		 if(d)d.className += " active";
	}
	}
	else
	{
		var d = document.getElementById("id_li_home");
		 if(d)d.className += " active";
	}
	
}
}

setTimeout(function(){_set_active_li(); },1000)