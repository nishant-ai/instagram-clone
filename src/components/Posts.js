import React from 'react'
import styled from 'styled-components'
import Post from './Post'

function Posts() {
  return (
    <Container>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Container>
  )
}

export default Posts

const Container = styled.div`
    margin-top: 10px;
    /* border: 1px solid green; */
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`