import React from "react"
import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {

    return (
        <>
            <section className="suggested-recipe-container">
                <ReactMarkdown aria-live="polite">
                    {props.recipe}
                </ReactMarkdown>
            </section>
        </>
    )
}