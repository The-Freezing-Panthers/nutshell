//Purpose: HTML representation of each individual article
import React, { Component } from "react"
import DataManager from '../../DataManager'

export default class ArticleCard extends Component {
    render() {
        return (
            <div>
                    {/* {this.props.article.title} */}
                    article should be displayed when this works
                    <button
                        onClick={() => DataManager.deleteData.deleteArticle(this.props.article.id)}
                        className="card-link">Remove Article
                    </button>
            </div>
        )
    }
}

// call to delete article
// DataManager.deleteData.deleteArticle(article);

