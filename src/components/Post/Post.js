import React, { Component } from 'react';
import './Post.scss';

export class Post extends Component {
	render() {
		return (
			<div className="row card-box" onClick={() => this.props.showPost(this.props.index)}>
				<div className="col-sm-12">
					<div className="card github-card">
						<div className="card-body row">
							<div className="col-sm-4">
								<img className="avatar-url" src={this.props.post.getBannerurl()} alt="Avatar" />
							</div>
							<div className="col-sm-8">
								<h5 className="card-title">{this.props.post.getHeading()}</h5>
								<h6 className="card-subtitle mb-2 text-muted">by {this.props.post.getAuthorname()}</h6>
								<p className="card-text card-description">{this.props.post.getDescription()}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
