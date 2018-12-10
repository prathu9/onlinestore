import React, { Component } from 'react';
import Header from "../header/Header.js";
import NavBar from "../navBar/NavBar.js";
import Content from "../content/content.js";
import ShowCart from "../showInCart/showCartPopup";
import './App.css';

class App extends Component{

  constructor(){
  	super();
  	this.state={
  	 	cartItem:0,
      productColor:"",
      productSize:"",
      productImg:"",
  	 	showCartDisplay:"none"
  	}
  }

  getCartItem=(noOfCartItem)=>{
  	noOfCartItem=parseInt(noOfCartItem);
  	this.setState({cartItem:(this.state.cartItem+noOfCartItem)});
  };

  getCartInfo=(color,size,img)=>{
     console.log(color,
      size,img);
    this.setState({
      productColor:color,
      productSize:size,
      productImg:img
    });
  }

  showCart=()=>{
    if(this.state.showCartDisplay==="none"){
      this.setState({showCartDisplay:"block"})
    }
  };

  hideCart=()=>{
    if(this.state.showCartDisplay==="block"){
      this.setState({showCartDisplay:"none"})
    }
  }

  render(){
    return(

        <div>
            <Header 
              cartItem={this.state.cartItem} 
              showCart={this.showCart}/>
            <NavBar />
            <Content 
              getCartItem={this.getCartItem}
              getCartInfo={this.getCartInfo}/>
            <ShowCart 
              toggleDisplay={this.state.showCartDisplay}
              image={this.state.productImg}
              color={this.state.productColor}
              size={this.state.productSize}
              cartItem={this.state.cartItem} 
              hideCart={this.hideCart}/>
        </div>

    );
  }
}

export default App;
