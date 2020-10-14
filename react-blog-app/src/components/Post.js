import React from 'react'

export default function Post({title, content, editPost, deletePost, id}) {
    return (
        <div>
            <section>
                <h3> {title}</h3>
                <p> {content}</p>
                <button onClick={() => editPost(id)}> Edit </button>
                <button onClick={() => deletePost(id)}> Delete </button>
            </section>
        </div>
    )
}
