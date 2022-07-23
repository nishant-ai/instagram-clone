import './App.css';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Navbar />
        <MainContent>
          <Body/>
        </MainContent>
    </div>
  );
}

export default App;

const MainContent = styled.div`
  margin-top: 6vh;
  padding-top: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`