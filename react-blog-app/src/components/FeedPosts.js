import React, { useRef, useState } from 'react'
import CreateNewPost from './CreateNewPost'
import EditPost from './EditPost';
import Post from './Post';

export default function FeedPosts() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [allPost, setAllPost] = useState([])
    const [isCreateNewPost, setIsCreateNewPost] = useState(false)
    const [isEditPost, setIsEditPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");

    const getTitle = useRef();
    const getContent = useRef();

    const saveTitle = (e) => {
        const title = e.target.value;
        setTitle(title)
    }
    const saveContent = (e) => {
        const content = e.target.value;
        setContent(content)
    }
    const toggleNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost)
    }
    const toggleEditPost = () => {
        setIsEditPost(!isEditPost)
    }

    const editPostFunction = id => {
        setEditPostId(id);
        toggleEditPost();
    }


    const updatePost = (e) => {
        e.preventDefault();
        const updatedPost = allPost.map(post => {
            if(post.id === editPostId) {
                return {...post, title: title || post.title, content: content || post.content}
            }
            return post
        })
        setAllPost(updatedPost);
        toggleEditPost()
    }

    const savePost = (e) => {
        e.preventDefault();
        const id = new Date().getTime()
        setAllPost([...allPost, {id, title, content}])
        console.log(allPost)
        getTitle.current.value="";
        getContent.current.value="";
        toggleNewPost();
    }

    const deletePost = id => {
        const deletedPost = allPost.filter(post => {
            return post.id !== id
        })
        setAllPost(deletedPost)
    }
    if(isCreateNewPost){
        return (
            <div>
                <CreateNewPost getTitle={getTitle} getContent={getContent} saveTitle={saveTitle} saveContent={saveContent} savePost={savePost} />
            </div>
        )
    } else if (isEditPost) {
        const editPostNew = allPost.find(post => {
            return post.id === editPostId
        })
        console.log(editPostNew)
        return (<EditPost 
        title={editPostNew.title}
        content={editPostNew.content}
        updatePost={updatePost}
        saveTitle={saveTitle}
        saveContent={saveContent}/>
        )
    }
    return (
        <div>
            <h2> All Post </h2>
            {!allPost.length ? <div><h3> Nothing to see here</h3></div> : allPost.map(post => {
                return (
                    <Post id={post.id} 
                    key={post.id} 
                    title={post.title}
                     content={post.content}
                     editPost={editPostFunction}
                     deletePost={deletePost}/>
                )
            })}
            <button onClick={toggleNewPost}> Create New </button>
        </div>
    )
    
}
