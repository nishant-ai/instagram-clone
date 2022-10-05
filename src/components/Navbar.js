import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import ExploreIcon from '@material-ui/icons/Explore';

function Navbar() {
  return (
    <Container>
        <Logo src='/nav-logo.png' alt='instagram'/>
        <NavActionsWrapper>
            <SearchWrapper>
                <SearchIcon color="disabled" />
                <SearchField type='search' placeholder='Search'/>
            </SearchWrapper>
            <NavLinks>
                <CustomHome />
                <CustomMessage />
                <CustomAdd />
                <CustomExplore />
                <CustomLike />
                <Profile />
            </NavLinks>
        </NavActionsWrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;

    @media (max-width: 626) {
        justify-content: space-between;
    }

    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #D3D3D3;
    height: 8vh;
    width: 100vw;
`

const Logo = styled.img`
    cursor: pointer;
    @media (max-width: 800px) {
        margin-left: 5px;
    }
    margin-left: 10vw;
    padding-top: 5px;
    height: 40px;
`

const NavActionsWrapper = styled.div`
    margin-right: 7vw;
    width: 50vw;
    display: flex;
    justify-content: space-around;
`

const SearchWrapper = styled.div`
    @media (max-width: 720px) {
        display: none;
    }
    margin-right: 30px;
    background: rgba(235, 235, 235, 0.5);
    padding-left: 5px;
    display: flex;
    align-items: center;
    border-radius: 5px;
`

const SearchField = styled.input`
    
    background: transparent;
    font-size: 17px;
    padding: 1.3vh 4vw 1.3vh 0.9vw;
    border: none;
    outline: none;

    &::placeholder {
        color: rgba(68, 68, 68, 0.50);
    }
`

const NavLinks = styled.div`
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 626px) {
        flex: 1;
        margin-right: 10px;
    }
`

const Profile = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background-color: black;
    cursor: pointer;
`

const CustomHome = styled(HomeIcon)`
    margin-right: 1vw;
    color: #333333;
    cursor: pointer;
`

const CustomMessage = styled(MessageRoundedIcon)`
    margin-right: 1vw;
    color: #333333;
    cursor: pointer;
`

const CustomAdd = styled(AddTwoToneIcon)`
    margin-right: 1vw;
    color: #333333;
    cursor: pointer;
`

const CustomLike = styled(FavoriteBorderTwoToneIcon)`
    margin-right: 1vw;
    color: #333333;
    cursor: pointer;
`

const CustomExplore = styled(ExploreIcon)`
    margin-right: 1vw;
    color: #333333;
    cursor: pointer;
`