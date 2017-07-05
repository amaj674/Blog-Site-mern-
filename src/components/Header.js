

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Add_Blog from './Add_Blog';
import 'bulma/css/bulma.css'
var _get_hash=window.location.hash;
var _path='home';
if(_get_hash)
{
	if(_get_hash.length > 2)
	{
	var _path=_get_hash.substring(2);
	}
}
var data = [
  {
    "text": "All",
    "onClick": "#",
	"active":"",
	"url":"home"
  },
  {
    "text": "INVESTMENTS",
    "url":"investments"
  },
  {
    "text": "FINANCE",
    "url": "finance"
  },
   {
    "text": "CREDIT",
    "url": "credit"
  },
   {
    "text": "FAIMILY",
    "url":"faimily"
  },
  {
    "text": "OTHER",
    "url": "other"
	
  },
  {
    "text": "MORE",
    "url": "more"
  },
   {
    "text": "RUPEE",
    "url": "rupee"
  }
  
];
var NavBarLink = React.createClass({
	getComponent: function(index) {
		debugger;
	
    },
    render: function() {
        return (
           <a href={"/#/"+this.props.url} onclick={this.getComponent(this.props.url)}>{this.props.text}</a>
        );
    }
})


var NavBarItem = React.createClass({
  generateLink: function(){
    //Right now we don't need our class but what if we wanted to change the text, add an arrow or something? 
    //Single responsibility principles tell us that it our "Item" should not handle this.
	
    return <NavBarLink url={this.props.url} text={this.props.text} />;
  },
  generateSubmenu: function(){
    //We generate a simple Navbar (the parent). 
    //Spoilers: it takes items as its argument. 
    return <NavBar items={this.props.submenu} />
  },
  generateContent: function(){
    var content = [this.generateLink()];
    if(this.props.submenu){
      //If there is a submenu in our data for this item
      //We add a generated Submenu to our content
      content.push(this.generateSubmenu());
    }
    return content;
  },
  getComponent_new: function(_id) {
       
	
    },

  render: function() {
    var content = this.generateContent();
	var _active=(this.props.url==_path?"active":"")+" headerli";
    return (
  <li id={"id_li_"+this.props.url} onClick={this.getComponent_new.bind(this,"id_li_"+this.props.url)} className= {_active}>
        {content}
      </li>
    );
  }
})
var NavBar = React.createClass({
  generateItem: function(item){
    return <NavBarItem text={item.text} url={item.url} active={item.active} submenu={item.submenu} />
  },
  render: function() {
    var items = this.props.items.map(this.generateItem);
	
    return (
      <ul className= {"menu"}>
      {items}
      </ul>
    );
  }
})

class Hero extends Component {
constructor(props) {
    super(props);

   
    this.update_page_show_type = this.update_page_show_type.bind(this);
 this.add_active_li = this.add_active_li.bind(this);
  
   _path='home';
 _get_hash=window.location.hash;
if(_get_hash)
{
	if(_get_hash.length > 2)
	{
	 _path=_get_hash.substring(2);
	
	
	}
}

  
  }
update_page_show_type (e)
{
	debugger;
	var Add_Blog_class=new Add_Blog();
	Add_Blog_class.render(e);
	Add_Blog_class.forceUpdate()
}
add_active_li(_id)
{
	debugger;
}
  render() {
    return (
      <section className="hero is-info">
              <div class="hero-body">
			<div className="nav-center">
			   <NavBar items={data} />
			   </div>
			  
			  </div>
      </section>
    )
  }
}
export default Hero;