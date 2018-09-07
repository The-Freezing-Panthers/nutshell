//Purpose: HTML representation of each individual article
import React, { Component } from "react"
import DataManager from '../../DataManager'

export default class ArticleCard extends Component {

    render() {
        return (
            <div className="box">
            {/* {this.props.article} */}
            {this.props.article.title}<br />
            {this.props.article.synopsis}<br />
            {this.props.article.url}<br />
            {this.props.article.date}<br />
            {this.props.article.id}<br />


            <button className="button is-small is-danger is-outlined" onClick={() => this.props.deleteArticle(this.props.article.id)}>Remove Article
            </button>
            </div>
        )
    }
}