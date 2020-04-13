import React, { Component } from 'react';
import './Blog.scss'

export class Blog extends Component {

    constructor(props) {
        super(props)
        console.log("Home Constructor");
        this.state = {
            "posts": [],
            "displayPost": false
        }
        this.showPost = this.showPost.bind(this);
    }

    componentDidMount() {
    }

    showPost(index) {
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 m-t-20">
                        <h1>{this.props.post.getHeading()}</h1>
                        <h3>{this.props.post.getDescription()}</h3>
                    </div>
                </div>    
                <div className="row">
                    <div className="col-sm-12 m-t-20">
                        <img className="banner-url" src={this.props.post.getBannerurl()} alt="Avatar" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 m-t-20">
                        <h5>{this.props.post.getContent()}</h5>
                    </div>
                </div>
            </div>
            
        )
    }
}

