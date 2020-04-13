import React, {Component} from 'react';
import './CreatePost.scss'

const { Get, PostPayload } = require('../../compiled-proto/PostService_pb');
const { PostServiceClient } = require('../../compiled-proto/PostService_grpc_web_pb');
const postService = new PostServiceClient('http://192.168.99.100:8080', null, null);

export class CreatePost extends Component {

    constructor(props) {
        super(props)
        console.log("Create Post Constructor");
        this.displaySelection = false;
        this.state = {
            "displayAuthor": false,
            "authors": [],
            "authorId": "1"
        }
        this.handleAuthorSelect = this.handleAuthorSelect.bind(this);
    }

    componentDidMount() {
        var request = new Get();
        postService.getAuthors(request, {}, (err, response) => {
            this.authors = response.getAuthorsList();
            this.setState((prevState)=> {
                return{
                    "authors": this.authors,
                    "displayAuthor" : false,
                    "authorId": "1"
                }
            })
        });      
    }

    handleAuthorSelect(event){
        let authorValue = event.target.value;
        this.setState((prevState)=> {
            return{
                "authors": prevState.authors,
                "displayAuthor" : false,
                "authorId": authorValue   
            }
        })
    }

    submit(){
        var request = new PostPayload();
        request.setPostid("1")
        request.setHeading(this.textTitle.value)
        request.setDescription(this.textDescription.value)
        request.setContent(this.textContent.value)
        request.setAuthorid(this.state.authorId)
        request.setBannerurl(this.textUrl.value)
        postService.createPost(request, {}, (err, response) => {
            console.log("Success")
        });   
    }

    render() {
        const options = this.state.authors.map((ele, index) => {
            return <option key={ele.getAuthorid()} index={index} value={ele.getAuthorid()}> {ele.getFirstname() +" " + ele.getLastname()}</option>
        });

        return (
            <div className="row">
                <div className="form-group offset-sm-2 col-sm-8 m-t-20">
                    <label htmlFor="title">Title</label>
                    <input ref={(input) => this.textTitle = input} type="text" className="form-control" id="title" placeholder="Enter Title"/>
                </div>
                <div className="form-group offset-sm-2 col-sm-8 m-t-20">
                    <label htmlFor="description">Description</label>
                    <input ref={(input) => this.textDescription = input} type="text" className="form-control" id="description" placeholder="Enter Description"/>
                </div>
                <div className="form-group offset-sm-2 col-sm-8 m-t-20">
                    <label htmlFor="content">Contenet</label>
                    <input ref={(input) => this.textContent = input} type="text" className="form-control" id="contenet" placeholder="Enter Contenet"/>
                </div>
                <div className="form-group offset-sm-2 col-sm-8 m-t-20" >
                    <label htmlFor="author">Author Id</label>
                    <select className={"form-control " + (this.displaySelection ? '': 'hidden')} id="author" onChange={this.handleAuthorSelect} value={this.state.authorId}>
                        {options}
                    </select>
                </div>
                <div className="form-group offset-sm-2 col-sm-8 m-t-20">
                    <label htmlFor="bannerUrl">Banner Url</label>
                    <input ref={(input) => this.textUrl = input} type="text" className="form-control" id="bannerUrl" placeholder="Enter Banner Url"/>
                </div>

                <div className="form-group offset-sm-2 col-sm-8 m-t-20 submit-button" onClick={() => this.submit()}>
                    <button type="button" className="btn btn-dark">Submit</button>
                </div>
            </div>
        )
    }

}
