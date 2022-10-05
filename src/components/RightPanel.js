import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import styled from 'styled-components'
import Suggestion from './Suggestion'

function RightPanel() {
  return (
    <Container>

      <MyProfile>

        <MyProfileLeft>
        <ProfilePic />
        <ProfileInfo>
          <ProfileId>_nishan.t</ProfileId>
          <ProfileName>Nishant Sharma</ProfileName>
        </ProfileInfo>
        </MyProfileLeft>

        <SwitchBtn>
            Switch
        </SwitchBtn>
      </MyProfile>

      <Suggestions>
        <SuggestionsHeader>
          <SuggestionsHeaderLeft>Suggestions For You</SuggestionsHeaderLeft>
          <SuggestionsHeaderRight>See All</SuggestionsHeaderRight>
        </SuggestionsHeader>

        <SuggestionsBody>
          <Suggestion/><Suggestion/><Suggestion/><Suggestion/><Suggestion/>
        </SuggestionsBody>

        <SuggestionsFooter>
          <FooterUpper>About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language</FooterUpper>
          <FooterLower>© 2022 INSTAGRAM FROM META</FooterLower>
        </SuggestionsFooter>
      </Suggestions>

    </Container>
  )
}

export default RightPanel

const Container = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  /* height: 60vh; */
  margin-left: 40px;
  width: 320px;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh 0;
`

const MyProfile = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
`

const MyProfileLeft = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex: 0.8;
  justify-content: flex-start;
`

const ProfilePic = styled(Avatar)`
  height: 7vh !important;
  width: 7vh !important;
  margin-right: 2vw;
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProfileId = styled.div`
  font-size: 14px;
  font-weight: bold;
`

const ProfileName = styled.div`
  font-size: 14px;
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
`

const Suggestions = styled.div`
  width: 100%;
  margin: 3vh 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`

const SuggestionsHeader = styled.div`
  margin-bottom: 2vh;
  display: flex;
  /* border: 1px solid red; */
  justify-content: space-between;
`

const SuggestionsHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #7B7B7B;
  font-size: 14px;
`

const SuggestionsHeaderRight = styled.div`
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
`

const SuggestionsBody = styled.div`
  /* border: 1px solid green; */
  margin-bottom: 3vh;
`

const SuggestionsFooter = styled.div`
  /* border: 1px solid green; */
`

const FooterUpper = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  color: #7B7B7B;
`

const FooterLower = styled.div`
  font-size: 12px;
  color: #7B7B7B;
`