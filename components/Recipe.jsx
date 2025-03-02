import React from "react"
import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {

    return (
        <section>
            <ReactMarkdown className="suggested-recipe-container">
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}