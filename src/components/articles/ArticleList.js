//Purpose: Build the article container, loop over each article in the database, and build a list of all articles

import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

export default class ArticleList extends Component {
    render () {
        return (
            <div>
                <h3>Articles</h3>
                <section>
                    {
                        this.props.articles.map(article => (
                            <ArticleCard key={article.id}
                            title={article.title}
                            synopsis={article.synopsis}
                            date={article.date}
                            id={article.id} />
                        ))
                    }     
                </section>
            </div>
        );
    }
}