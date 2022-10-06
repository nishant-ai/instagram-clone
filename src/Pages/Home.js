import Navbar from '../components/Navbar'
import Body from '../components/Body'
import styled from 'styled-components'
// import ImageUpload from './components/ImageUpload';
function Home() {
  return (
    <div className='App'>
      <Navbar />
      <MainContent>
        <Body />
      </MainContent>
      {/* <ImageUpload /> */}
    </div>
  )
}
export default Home

const MainContent = styled.div`
  margin-top: 6vh;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
