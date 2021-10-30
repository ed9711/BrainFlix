import { Component } from "react";
import brainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
// import searchIcon from "../../assets/Icons/search.svg";
import './nav.scss';

class Nav extends Component {
    render(){
        return(
            <section className="nav">
                <div className="nav__title">
                    <img className="nav__title-icon" src={brainFlixLogo} alt="brainflix logo"></img>
                </div>
                <div className="nav__block">
                    <div className="nav__subblock">
                        <input className="nav__search" type="text" placeholder="Search"></input>
                    </div>
                    <div><button className="nav__upload">UPLOAD</button></div>
                    <div className="nav__avatar"></div>
                </div>
            </section>
        );
    };
}
export default Nav;