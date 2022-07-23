import React from 'react'
import styled from 'styled-components';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function Body() {
  return (
    <Container> 
        <LeftPanel/>
        <RightPanel/>
    </Container>
  )
}

export default Body

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`