/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setFilterData } from './components/pieChart/pieChartSlice';
import { useGetSampleDataQuery } from './apiReducer';
import PieChart from './components/pieChart/PieChart';
import RadioButtons from './components/radioButtons/RadioButtons';
import GridComponent from './components/gridComponent/GridComponent';
import TopBar from './components/topBarComponent/TopBar';
import PieFooter from './components/pieFooterComponent/PieFooter';
import GridTitle from './components/gridTitle/GridTitle';

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
  overflow: hidden
`;

const StyledTopBar = styled.div`
  background-color: grey;
  display: flex;
`;

const StyledRadioButtonDiv = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
`;

const StyledPieChartDiv = styled.div`
  background-color: lightGrey;
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
  justify-content: space-between;
`;

const StyledGridDiv = styled.div`
  background-color: #3096e0;
  height: 100%;
`;

const StyledPieInformationdiv = styled.div`
 font-size: 8px
`;

const StyledGridWindow = styled.div`
max-height: 50%;
overflow: hidden;
`;

const GridTitleContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%
`;

function App() {
  const { data, error, isLoading } = useGetSampleDataQuery('data');

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setFilterData(data));
    }
  }, [isLoading, data]);

  console.log(!isLoading ? { data, error, isLoading } : 'isLoading');

  return (
    <div className="App">
      <StyledAppDiv>
        <StyledComponentWindow>
          <StyledTopBar>
            <div>
              <div>
                <div style={{ fontSize: '42px', textAlign: 'left', height: '15%' }}><TopBar /></div>
              </div>
              <StyledRadioButtonDiv>
                <RadioButtons />
              </StyledRadioButtonDiv>
            </div>
            <GridTitleContainer>
              <GridTitle />
            </GridTitleContainer>
          </StyledTopBar>

          <StyledBodyContainer>
            <StyledBody>
              <StyledPieChartDiv>
                <div>pie chart below</div>
                <PieChart
                  data={isLoading ? ['loading', 'loading', 'loading'] : data}
                  outerRadius={160}
                  innerRadius={0}
                />
                <StyledPieInformationdiv>
                  <PieFooter />
                </StyledPieInformationdiv>

              </StyledPieChartDiv>
              <StyledGridWindow>
                <StyledGridDiv>
                  <GridComponent />
                </StyledGridDiv>
              </StyledGridWindow>
            </StyledBody>
          </StyledBodyContainer>

        </StyledComponentWindow>
      </StyledAppDiv>
    </div>
  );
}

export default App;
