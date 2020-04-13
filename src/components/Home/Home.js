import React, {Component} from 'react';
import { Post } from '../Post/Post';
import { Blog } from '../Blog/Blog';

const { Get } = require('../../compiled-proto/PostService_pb');
const { PostServiceClient } = require('../../compiled-proto/PostService_grpc_web_pb');
const postService = new PostServiceClient('http://192.168.99.100:8080', null, null);


export class Home extends Component {

    constructor(props) {
        super(props)
        console.log("Home Constructor");
        this.state = {
            "posts": [],
            "displayPost" : false,
            "index": 0
        }
        this.showPost = this.showPost.bind(this);
    }

    componentDidMount() {
        var request = new Get();
        postService.getAllPosts(request, {}, (err, response) => {
            this.posts = response.getPostsList();
            this.setState((prevState)=> {
                return{
                    "posts": this.posts,
                    "displayPost" : false,
                    "index" : 0
                }
            })
        });        
    }

    showPost(index) {
        this.setState((prevState) => {
            return {
                "posts": prevState.posts,
                "displayPost": true,
                "index" : index
            }
        });
        this.props.handleBlog(this.state.posts[index], index);
    }

    render() {
        const PostItems = this.state.posts.map((ele, index) => {
                            return <Post key={ele.getPostid()} index={index} post={ele} showPost={this.showPost} />
                        });

        const DisplayItems = () =>{
            if(!this.state.displayPost) return PostItems;
            else if(this.state.posts) return <Blog index={this.state.index} post={this.state.posts[this.state.index]}/>
        }                    

        return (
            <div>
                {DisplayItems()}
            </div>
        );
    }
}