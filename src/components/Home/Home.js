import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import { Post } from '../Post/Post';

const { Get } = require('../../compiled-proto/PostService_pb');
const { PostServiceClient } = require('../../compiled-proto/PostService_grpc_web_pb');
const postService = new PostServiceClient('http://192.168.99.100:8080', null, null);


export class Home extends Component {

    constructor(props) {
        super(props)
        console.log("Home Constructor");
        this.state = {
            "posts": []
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
        var request = new Get();
        postService.getAllPosts(request, {}, (err, response) => {
            this.posts = response.getPostsList();
            this.setState((prevState)=> {
                return{
                    "posts": this.posts
                }
            })
        });        
    }

    handleOnClick(index) {
        console.log("handleOnClick");
    }

    render() {
        const PostItems = this.state.posts.map((ele, index) => <Post index={index} post={ele} 
                            handleOnClick={this.handleOnClick} />);

        return (
            <div>
                {PostItems}
            </div>
        );
    }
}