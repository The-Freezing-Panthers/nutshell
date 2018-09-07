//Purpose: HTML representation of each individual article
import React, { Component } from "react"
import { Link } from "react-router-dom"
import DataManager from '../../DataManager'

export default class ArticleCard extends Component {
    render() {
        return (
            <div key={this.props.article.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.article.title}
                        <Link className="nav-link" to={`/articles/${this.props.article.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.DataManager.deleteData.deleteArticle(this.props.article.id)}
                            className="card-link">Remove</a>
                    </h5>
                </div>
            </div>
        )
    }
}

// call to delete article
// DataManager.deleteData.deleteArticle(article);

