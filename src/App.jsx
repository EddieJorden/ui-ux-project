/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setFilterData, selectFilter } from './components/pieChart/pieChartSlice';
import { useGetSampleDataQuery } from './apiReducer';
import PieChart from './components/pieChart/PieChart';
import FilterButtons from './components/filterButtons/FilterButtonsComponent';
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
  height: 100vh;
`;

const StyledComponentWindow = styled.div`
  background-color: white;
  color: black;
  box-shadow: 5px 5px 10px;
  border-radius: 10px;
  display: flex;

  @media only screen and (max-width: 1096px) {
    width: 100vw
  }
`;

const StyledRadioButtonDiv = styled.div`
  text-align: left;
  display: flex;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const StyledPieChartDiv = styled.div`
  height: 100%;
`;

const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBody = styled.div`
  max-height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1096px) {
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
`;

const StyledGridDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px
`;

const StyledPieInformationdiv = styled.div`
 font-size: 14px;
 height: 100%;
 display:flex;
 flex-direction: column;
 justify-content: start;
  margin: 30px 0px;
`;

const GridTitleContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end
`;

function App() {
  const { data, isLoading } = useGetSampleDataQuery('data');
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setFilterData(data));
    }
  }, [isLoading, data, filter]);

  return (
    <div className="App">
      <StyledAppDiv>
        <StyledComponentWindow>
          <StyledBodyContainer>
            <StyledBody>

              <StyledPieChartDiv>
                <div style={{
                  fontSize: '42px', textAlign: 'left', margin: '30px',
                }}
                >
                  <TopBar />
                </div>
                <StyledRadioButtonDiv>
                  <FilterButtons />
                </StyledRadioButtonDiv>
                <PieChart
                  data={isLoading ? ['loading', 'loading', 'loading'] : data}
                  outerRadius={142}
                  innerRadius={0}
                />
                <StyledPieInformationdiv>
                  <PieFooter />
                </StyledPieInformationdiv>
              </StyledPieChartDiv>

              <StyledGridDiv>
                <GridTitleContainer>
                  <GridTitle />
                </GridTitleContainer>
                <GridComponent />
              </StyledGridDiv>

            </StyledBody>
          </StyledBodyContainer>
        </StyledComponentWindow>
      </StyledAppDiv>
    </div>
  );
}

export default App;
