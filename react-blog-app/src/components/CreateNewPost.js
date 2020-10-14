import React from 'react'

export default function CreateNewPost({saveTitle, saveContent, savePost, getTitle, getContent }) {
    return (
        <div>
            <form onSubmit={savePost}>
                <h1> Create New Post </h1>
                <input ref={getTitle} type="text" placeholder="title" size="39" onChange={saveTitle} required></input>
                <br />
                <br />
                <textarea ref={getContent} placeholder="contents" rows="8" cols="41" onChange={saveContent} required></textarea>
                <br />
                <br />
                <button> Save Post </button>
            </form>
        </div>
    )
}
