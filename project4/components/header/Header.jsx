import React from 'react';
import './Header.css';
class Header extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <div className="header">
            <div className="hayg">
                <a href="getting-started.html">Нүүр хуудас</a>
                <a href="http://localhost:3000/p2.html">Хуудас 2</a>
                <a href="p4.html">Хуудас 4</a>
                <a href="p5.html">Хуудас 5</a>
            </div>
            <div className="img">
                <img src="../WebProg/project4/components/header/logo.png" alt="ug n muis-n logo"></img>
            </div>
        </div>
    );
    }
}
export default Header;