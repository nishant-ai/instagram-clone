import React from 'react'
import styled from 'styled-components'
import Story from './Story'

function Stories() {
  return (
      <Container>
        <Story/><Story/><Story/><Story/><Story/><Story/>
        <Story/><Story/><Story/><Story/><Story/><Story/>
        <Story/><Story/><Story/><Story/><Story/><Story/>
      </Container>
  )
}

export default Stories

const Container = styled.div`

  overflow-x: scroll;
  overflow-y: hidden;
  /* margin: 10px; */
  background: white;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
  height: 13vh;
  display: flex;
  align-items: center;
  padding: 0 11px;

  &::-webkit-scrollbar{
    display: none;
  }
`