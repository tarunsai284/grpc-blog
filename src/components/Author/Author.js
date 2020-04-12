import React,  { Component } from 'react';
import './Author.scss';

export class Author extends Component {
	render() {
		return (
			<div className="row card-box">
				<div className="col-sm-12">
					<div className="card github-card">
						<div className="card-body row">
							<div className="col-sm-4">
								<img className="avatar-url" src={this.props.author.getImageurl()} alt="Avatar" />
							</div>
							<div className="col-sm-8">
								<h5 className="card-title card-title-margin">{this.props.author.getFirstname()+this.props.author.getLastname()}</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
