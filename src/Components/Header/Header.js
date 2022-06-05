import React, {Component} from 'react'
import logo from "../../photos/EmMovie-logos.jpeg"
import "../Header/Header.css"
export default class Header extends Component {
  
  render() {
   
    return (
      <div className='mydiv'>
        <img onClick={()=>window.scroll(0,0)} className='logo' src={logo} alt=""/>
       </div>
    )
  }
}

