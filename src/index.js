

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,hashHistory} from 'react-router';
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
	class test extends Component {
    render(){
        return (<b> Hello World </b>)
    }
}
ReactDOM.render(
<Router history={hashHistory}>

<Route path="/" component={Home}/>
<Route path="home" component={Home}/>

<Route path="test" name="test" component={test}/>

</Router>
    ,
  document.getElementById('root')
);





