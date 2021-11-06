import { Component } from "react";
import { Link } from "react-router-dom";
import brainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import './nav.scss';

class Nav extends Component {
    render(){
        return(
            <nav className="nav">
                <Link to="/" className="nav__title">
                    <img className="nav__title-icon" src={brainFlixLogo} alt="brainflix logo"></img>
                </Link>
                <div className="nav__block">
                    <div className="nav__subblock">
                        <input className="nav__search" type="text" placeholder="Search"></input>
                    </div>
                    <div><button className="nav__upload">UPLOAD</button></div>
                    <div className="nav__avatar"></div>
                </div>
            </nav>
        );
    };
}
export default Nav;