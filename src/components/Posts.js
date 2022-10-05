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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`