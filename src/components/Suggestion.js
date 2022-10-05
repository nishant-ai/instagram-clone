import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

function Suggestion() {
  return (
    <MyProfile> 
        <MyProfileLeft>
            <ProfilePic />
            <ProfileInfo>
                <ProfileId>random_profile</ProfileId>
                <ProfileName>Followed By x, y, z, ...</ProfileName>
            </ProfileInfo>
        </MyProfileLeft>

        <SwitchBtn>
            Follow
        </SwitchBtn>
    </MyProfile>
  )
}

export default Suggestion

const MyProfile = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  margin-bottom: 1.6vh;
`

const MyProfileLeft = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex: 0.8;
  justify-content: flex-start;
`

const ProfilePic = styled(Avatar)`
  height: 4vh !important;
  width: 4vh !important;
  margin-right: 2vw;
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProfileId = styled.div`
  font-size: 13px;
  font-weight: bold;
`

const ProfileName = styled.div`
  font-size: 11px;
  color: #7B7B7B;
  margin-top: 3px;
`

const SwitchBtn = styled.a`
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid green; */
  display: flex;
  flex: 0.2;
  color: #0E7FF4;
  font-size: 12px;
  font-weight: bold;
  padding-right: 20px;
`
