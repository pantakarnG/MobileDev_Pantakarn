import React, { Component } from 'react'
import "./Post.css"

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <p><strong>{this.props.userID}</strong> {this.props.massage}</p>
                <p>Comment:</p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
