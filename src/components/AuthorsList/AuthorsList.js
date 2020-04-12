import React,  { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AuthorsList.module.scss';
import { Author } from '../Author/Author';

const { Get } = require('../../compiled-proto/PostService_pb');
const { PostServiceClient } = require('../../compiled-proto/PostService_grpc_web_pb');
const postService = new PostServiceClient('http://192.168.99.100:8080', null, null);


export class AuthorsList extends Component {

    constructor(props) {
        super(props)
        console.log("Home Constructor");
        this.state = {
            "authors": []
        }
    }

    componentDidMount() {
        var request = new Get();
        postService.getAuthors(request, {}, (err, response) => {
            this.authors = response.getAuthorsList();
            this.setState((prevState) => {
                return {
                    "authors": this.authors
                }
            })
        });
    }

    handleAuthorC(index) {
        console.log("handleAuthorC");
    }

    render() {
        const AuthorItems = this.state.authors.map((ele, index) => <Author index={index} author={ele} />);
        return (
            <div>
                {AuthorItems}
            </div>
        );
    }
}