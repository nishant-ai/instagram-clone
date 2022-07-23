import React from 'react'
import Avatar from '@mui/material/Avatar'
import styled from 'styled-components'

function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

function Story() {
  return (
    <Container>
        <CustomAvatar/>
        <span>{truncate('some random', 9)}</span>
    </Container>
  )
}

export default Story

const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    align-items: center;
`

const CustomAvatar = styled(Avatar)`
  height: 7vh !important;
  width: 7vh !important;
  margin:  0px 7px 3px 7px;
`