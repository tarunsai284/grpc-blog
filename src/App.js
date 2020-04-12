import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Home } from './components/Home/Home'
import { AuthorsList } from './components/AuthorsList/AuthorsList'

const { Get } = require('./compiled-proto/PostService_pb');
const { PostServiceClient } = require('./compiled-proto/PostService_grpc_web_pb');
const postService = new PostServiceClient('http://192.168.99.100:8080', null, null);


class App extends Component {

    constructor(props) {
        super(props)
        console.log("App Constructor");
        this.state = {
            "home": true,
            "authors": false,
        }

        this.navHeader = {
            "home" : "home",
            "authors" : "authors"
        }
    }

    handleNavClick(ele){
        console.log(ele);
        this.setState((prevState)=> {
            var prevObj = JSON.parse(JSON.stringify(prevState))
            Object.keys(prevObj).forEach(key => prevObj[key] = false)
            prevObj[ele] = true;
            return prevObj;
        })
    }

    render() {
        const navTemplate = () =>{
            if(this.state.home) return <Home />;
            else if(this.state.authors) return <AuthorsList />;
        }

        return (
            <div className="App App-header">
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active" onClick={()=>this.handleNavClick(this.navHeader.home)}>
                                <a className={"nav-link " + (this.state.home ? 'nav-active-bold': 'text-white ')} href="javascript:void(0)">Home</a>
                            </li>
                            <li className="nav-item"  onClick={()=>this.handleNavClick(this.navHeader.authors)}>
                                <a className={"nav-link " + (this.state.authors ? 'nav-active-bold': 'text-white ')} href="javascript:void(0)">Authors</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {navTemplate()}
                </div>
            </div>
        );
    }
}

export default App;
