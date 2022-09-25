import React, { useState } from 'react'
import './App.css'
import MoreInfo from './MoreInfo'

function Post(props) {
    const [currPost, setCurrPost] = useState()
    const [comms, setComms] = useState()
    const [isOpened, setIsOpened] = useState(false)

    async function moreInfo(id) {
        if (isOpened) {
            return setIsOpened((prevState) => !prevState)
        }
        const responsePost = await fetch(`https://dummyjson.com/posts/${id}`)
        const responseCom = await fetch(`https://dummyjson.com/posts/${id}/comments`)
        const parsedPost = await responsePost.json()
        const parsedCom = await responseCom.json()
        setCurrPost(parsedPost)
        setComms(parsedCom.comments)
        setIsOpened((prevState) => !prevState)
    }

    return (
        <div className='postcard'>
            <h2 onClick={() => moreInfo(props.id)} > {props.title} </h2>
            {(currPost && comms) && isOpened && <MoreInfo comms={comms} currPost={currPost}/>  }
        </div>
    )
}

export default Post