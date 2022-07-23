import React from 'react'
import styled from 'styled-components'
import Story from './Story'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function Stories() {
  return (
      <Container>
        {/* <CustomLeftScroll/>
        <CustomRigtScroll/> */}
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

const CustomLeftScroll = styled(KeyboardArrowLeftIcon)`
  z-index: 1;
  position: absolute;
  left: 19vw;
  color: gray;
  background-color: white;
  border-radius: 100%;
`

const CustomRigtScroll = styled(KeyboardArrowRightIcon)`
  @media (max-width: 1000px) {
    right: 19vw;
  } 
  z-index: 1;
  position: absolute;
  right: 50vw;
  color: gray;
  background-color: white;
  border-radius: 100%;
`