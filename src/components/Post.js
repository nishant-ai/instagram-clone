import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavouriteBordericon from '@material-ui/icons/FavoriteBorder'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import TagFacesIcon from '@material-ui/icons/TagFaces'

function Post() {
  return (
    <Container>

        <PostHeader>
            <HeaderLeft>
                <CustomAvatar/>
                random_page
            </HeaderLeft>
            <HeaderRight>
                <MoreHorizIcon/>
            </HeaderRight>
        </PostHeader>

        <PostContent src='/sample.jpeg' />

        <PostReactions>
            <ReactionsLeft>
                <CustomFav/>
                <CustomComment/>
                <CustomSend/>
            </ReactionsLeft>

            <ReactionsRight>
                <BookmarkBorderOutlinedIcon/>
            </ReactionsRight>

        </PostReactions>
        <PostAbout>
            <Likes>57,211 likes</Likes>
            <Description><b>rvcjinsta</b> When Meme got real..😂😂</Description>
            <Comments>View all 558 Comments</Comments>
            <PostTime>2 DAYS AGO</PostTime>
        </PostAbout>
        <PostComment>
            <PostCommentLeft>
                <TagFacesIcon/>
                <AddComment placeholder='Add a Comment...' />
            </PostCommentLeft>
            <PostBtn>Post</PostBtn>
        </PostComment>
    </Container>
  )
}

export default Post

const Container = styled.div`
    background: white;
    width: 100%;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2vh;
`

const CustomAvatar = styled(Avatar)`
    height: 4.4vh !important;
    width: 4.4vh !important;
    margin: 0 10px;
`

const PostHeader = styled.div`
    padding: 10px 0;
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D3D3D3;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.9;
    font-weight: bold;
    font-size: 13px;
`

const HeaderRight = styled.div`
    display: flex;
    flex: 0.1;
`

const PostContent = styled.img`
    object-fit: cover;
    height: 60vh;
    width: 100%;
`
const PostReactions = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
    border-top: 1px solid #D3D3D3;
    height: 6vh;
`

const CustomFav = styled(FavouriteBordericon)`
    margin: 0 5px;
`

const CustomComment = styled(ModeCommentOutlinedIcon)`
    margin: 0 5px;
`

const CustomSend = styled(SendOutlinedIcon)`
    margin: 0 5px;
`

const ReactionsLeft = styled.div`
    display: flex;
    flex: 0.95;
`

const ReactionsRight = styled.div`
    display: flex;
    flex: 0.05;
`

const PostAbout = styled.div`
    font-size: 14px;
    width: 95%;
    /* margin: 10px 5px; */
    /* border: 1px solid green; */
`

const Likes = styled.div`
    font-weight: bold;
`
const Description = styled.div``
const Comments = styled.div`
    font-weight: 500;
    color: #7B7B7B;
`
const PostTime = styled.div`
    margin-top: 5px;
    color: #7B7B7B;
    font-weight: bold;
    font-size: 10px;
`

const PostComment = styled.div`
    border-top: 1px solid #D3D3D3;
    /* border: 1px solid red; */
    margin: 10px 0;
    width: 100%;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PostCommentLeft = styled.div`
    margin-left: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const AddComment = styled.input`
    border: none;
    outline: none;
    margin-left: 10px;
    font-size: 14px;
`

const PostBtn = styled.div`
  cursor: pointer;
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid green; */
  display: flex;
  flex: 0.2;
  color: #0E7FF4;
  font-size: 13px;
  font-weight: bold;
  margin-right: 10px;
`