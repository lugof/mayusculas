
import React, { Component } from 'react';
import './App.css';
import API from "./utils/API";

//Components
import NavbarMenu from './Components/NavbarMenu/NavbarMenu';
import Footer from './Components/Footer/Footer';

//Views
import  Principal  from './Views/Principal/Principal';
import Sidebar from './Components/Aside/Sidebar' 

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      isAdminAuthenticated: false,
      convertedWord:""
      
    }
  }


    getCapitals=(capitals)=>{
      console.log("we are getting all liquids")
    API.getCapitals(capitals).then(result=>{
      console.log("this is result from db", result);
      this.setState({convertedWord:result.data})
    }).catch(err=>console.log(err));
    }

  /*  chooseRender =()=>{
      if(this.state.isAdminAuthenticated){
        return <AdminLogin />
      } else{
        return (  <div>
          <NavbarMenu/>
          <Principal/>
        </div>)
      }
    }
*/
  render() { 
    console.log("state from app ", this.state.convertedWord)
    const {convertedWord}=this.state
    return (
        /*   <div className="App">
          {this.chooseRender()}
        </div>*/

      <div>
        <NavbarMenu  />

        <Principal convertedWord={convertedWord} getCapitals={this.getCapitals} />
        <Footer/>
      </div>
    );
  }
}
