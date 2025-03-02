import React from "react"
import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {

    return (
        <>
            <section className="suggested-recipe-container">
                <h2>Chef Gpt Recommends:</h2>
                <ReactMarkdown aria-live="polite">
                    {props.recipe}
                </ReactMarkdown>
            </section>
        </>
    )
}