//Purpose: HTML representation of each individual article
import React, { Component } from "react"
import DataManager from '../../DataManager'

export default class ArticleCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div key={this.props.article.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.article.title}
                            <button
                                onClick={() => DataManager.deleteData.deleteArticle(this.props.article.id)}
                                className="card-link">Remove</button>
                        </h5>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// call to delete article
// DataManager.deleteData.deleteArticle(article);

