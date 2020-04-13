import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Home } from './components/Home/Home'
import { AuthorsList } from './components/AuthorsList/AuthorsList'
import { Post } from './components/Post/Post';
import { Blog } from './components/Blog/Blog';
import { CreatePost } from './components/CreatePost/CreatePost';

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
            "blog": false,
            "post" : false,
            "create" : false,
            "index" : false
        }

        this.navHeader = {
            "home" : "home",
            "authors" : "authors",
            "create" : "create"
        }

        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleBlog = this.handleBlog.bind(this);
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

    handleBlog(postItem, item){
        this.setState((prevState)=> {
            var prevObj = JSON.parse(JSON.stringify(prevState))
            Object.keys(prevObj).forEach(key => prevObj[key] = false)
            prevObj.post = postItem;
            prevObj.item = item;
            prevObj.blog = true;
            return prevObj;
        })
    }

    render() {
        const navTemplate = () =>{
            if(this.state.home) return <Home  handleBlog={this.handleBlog} />;
            else if(this.state.authors) return <AuthorsList  handleNavClick={this.handleNavClick} />;
            else if(this.state.blog) return <Blog index={this.state.index} post={this.state.post}/>
            else if(this.state.create) return <CreatePost />
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
                            <li className="nav-item"  onClick={()=>this.handleNavClick(this.navHeader.create)}>
                                <a className={"nav-link " + (this.state.create ? 'nav-active-bold': 'text-white ')} href="javascript:void(0)">Create Post</a>
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
