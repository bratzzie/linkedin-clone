import { Avatar } from '@material-ui/core'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import React, {forwardRef} from 'react'
import styled from 'styled-components'
import InputOption from './InputOption'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
const Post = forwardRef(({ name, description, message, photoUrl}, ref) => {


    return (
        <PostSection ref={ref}>
            <PostHeader>
               <Avatar src={photoUrl}>{name[0]}</Avatar>
               <PostInfo>
                   <h2>{name}</h2>
                   <p>{description}</p>
               </PostInfo>
            </PostHeader>
            
            <PostBody>
                <p>{message}</p>
            </PostBody>

            <PostButtons>
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
         
         
         
         
            </PostButtons>
        </PostSection>
    )
})

export default Post
const PostButtons =styled.div`
display: flex;
justify-content: space-evenly;`
const PostSection = styled.div`
background-color: #fff;
padding: 15px;
margin-bottom: 10px;
border-radius: 10px;
`
const PostInfo = styled.div`
margin-left: 10px;
p{
    font-size: 12px;
    color: gray;
h2{
    font-size: 15px;
}
}`
const PostHeader=  styled.div`
display: flex;
margin-bottom: 10px;
`
const PostBody =styled.div`
overflow-wrap: anythere;`