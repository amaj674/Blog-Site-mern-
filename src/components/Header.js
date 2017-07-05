

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Add_Blog from './Add_Blog';
import 'bulma/css/bulma.css'

var data = [
  {
    "text": "All",
    "onClick": "#",
	"active":"active",
	"url": 1
  },
  {
    "text": "INVESTMENTS",
    "url": 2
  },
  {
    "text": "FINANCE",
    "url": 3
  },
   {
    "text": "CREDIT",
    "url": 4
  },
   {
    "text": "FAIMILY",
    "url":5
  },
  {
    "text": "OTHER",
    "url": 6
  },
  {
    "text": "MORE",
    "url": 7
  },
   {
    "text": "RUPEE",
    "url": 8
  }
  
];
var NavBarLink = React.createClass({
	getComponent: function(index) {
		debugger;
	window.open('http://localhost:3000/?page='+index,'_self')
    },
    render: function() {
        return (
           <a onClick={this.getComponent.bind(this,this.props.url)} >{this.props.text}</a>
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
constructor(props) {
    super(props);

   
    this.update_page_show_type = this.update_page_show_type.bind(this);


  }
update_page_show_type (e)
{
	debugger;
	var Add_Blog_class=new Add_Blog();
	Add_Blog_class.render(e);
	Add_Blog_class.forceUpdate()
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