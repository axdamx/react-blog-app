import React from 'react'

export default function EditPost({title, content, updatePost, saveTitle, saveContent}) {
    return (
        <div>
            <form>
                <h1> Edit Post </h1>
                <input defaultValue={title}type="text" placeholder="title" size="39" required onChange={saveTitle}></input>
                <br />
                <br />
                <textarea defaultValue={content} placeholder="contents" rows="8" cols="41" required onChange={saveContent}></textarea>
                <br />
                <br />
                <button onClick={updatePost}> Update Post </button>
            </form>
        </div>
    )
}
