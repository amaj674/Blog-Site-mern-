

import React, { Component } from 'react';
import 'bulma/css/bulma.css'

var data = [
  {
    "text": "All",
    "url": "#",
	"active":"active"
  },
  {
    "text": "INVESTMENTS",
    "url": "#"
  },
  {
    "text": "FINANCE",
    "url": "#"
  },
   {
    "text": "CREDIT",
    "url": "#"
  },
   {
    "text": "FAIMILY",
    "url": "#"
  },
  {
    "text": "OTHER",
    "url": "#"
  },
  {
    "text": "MORE",
    "url": "#"
  },
   {
    "text": "RUPEE",
    "url": "#"
  }
  
];
var NavBarLink = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>{this.props.text}</a>
    );
  }
})
var NavBarItem = React.createClass({
  generateLink: function(){
    //Right now we don't need our class but what if we wanted to change the text, add an arrow or something? 
    //Single responsibility principles tell us that it our "Item" should not handle this.
	debugger;
	
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
  render: function() {
    var content = this.generateContent();
	var _active=(this.props.active?this.props.active:"");
    return (
      <li className= {_active}>
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