/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import styled from 'styled-components';
import { useGetSampleDataQuery } from './sampleDataApi';

const StyledAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh
`;

const StyledComponentWindow = styled.div`
  background-color: white;
  color: black;
  height: 600px;
  width: 80vw;
  box-shadow: 5px 5px 10px;
  border-radius: 10px;
`;

const StyledTopBar = styled.div`
  background-color: grey;
`;

const StyledRadioButtonDiv = styled.div`
  width: 100%;
  text-align: left
`;

const StyledPieChartDiv = styled.div`
  background-color: red;
  height: 100%;
`;

const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBody = styled.div`
  width: 88%;
  max-height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between
`;

const StyledGridDiv = styled.div`
  background-color: green;
  height: 100%
`;

const StyledPieInformationdiv = styled.div`
  background-color: yellow
`;

function App() {
  const { data, error, isLoading } = useGetSampleDataQuery('data');
  console.log(!isLoading ? { data, error, isLoading } : 'isLoading');
  return (
    <div className="App">
      <StyledAppDiv>
        <StyledComponentWindow>

          <StyledTopBar>
            <div style={{ fontSize: '44px', textAlign: 'left', height: '15%' }}>Top Bar</div>
            <StyledRadioButtonDiv>
              radio button div
            </StyledRadioButtonDiv>
          </StyledTopBar>

          <StyledBodyContainer>
            <StyledBody>
              <StyledPieChartDiv>
                pie chart div
              </StyledPieChartDiv>

              <StyledGridDiv>
                grid div
              </StyledGridDiv>
            </StyledBody>
          </StyledBodyContainer>
          <StyledPieInformationdiv>
            pie information here
          </StyledPieInformationdiv>

        </StyledComponentWindow>
      </StyledAppDiv>
    </div>
  );
}

export default App;
