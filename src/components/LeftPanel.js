import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import styled from 'styled-components'

function LeftPanel() {
  return (
    <Container>
        <Stories/>
        <Posts/>
    </Container>
  )
}

export default LeftPanel

const Container = styled.div`
    @media (max-width: 1000px) {
        width: 80vw;
    }
    width: 450px;
    /* border: 1px solid purple; */
`