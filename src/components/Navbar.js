import React, { Component } from 'react';
import './Navbar.css'
import './logo.svg'


const menuNames = [
    {
        title: 'Home',
        url: '#',
        cname: 'Nav-Links'
    },
    {
        title: 'Vote',
        url: '#',
        cname: 'Nav-Links'
    },
]

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img height="7%" width="7%" src='https://lh3.googleusercontent.com/aN_s72boPAMGSg-OxtZ-1blKCk9KiyZHfJtEMiacmozCNS3dLTK17j8FsjXS5QJ0C5dOvnSIcPSVPpsFBi0sMsMJLk9a5oGnTHC6z4s35VDkQnK7RzTTEqmfyiPQ90GsIZmYvt0guA=w2400'/></h1>
                <div className="menu-icon">

                </div>
                <ul className="nav-menu">
                    {menuNames.map((item, index) => {
                        return(
                        <li key={index}>
                            <a className={item.cname} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )})}
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;