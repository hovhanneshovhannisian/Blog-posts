import React, { useEffect, useState } from 'react'
import Post from './Post'
import UserInfo from './UserInfo'
import './App.css'

function Profile() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchingPosts = async () => {
            const response = await fetch('https://dummyjson.com/posts')
            const posts = await response.json()
            setPosts(posts.posts)
        }
        fetchingPosts()
    }, [])

    const mappedPosts = posts.map((post) => {
        return (
            <div key={post.id}>
                <Post {...post} />
            </div>
        )
    })

    return (
        <div className='workplace'>
            <div className='leftSide'>
                <h2>Blog</h2>
                <UserInfo />
            </div>
            <div className='posts'>
                {mappedPosts}
            </div>
        </div>
    )
}

export default Profile