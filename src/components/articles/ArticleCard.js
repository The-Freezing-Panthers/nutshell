//Purpose: HTML representation of each individual article
import React, { Component } from "react"
import DataManager from '../../DataManager'

export default class ArticleCard extends Component {

    render() {
        return (
            <div>
            {/* {this.props.article} */}
            article should display here or else broken
            {this.props.article}
            <button onClick={() => DataManager.deleteData.deleteArticle(this.props.article.id)}>Remove Article
            </button>
            </div>
        )
    }
}