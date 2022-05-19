/* eslint-disable react/react-in-jsx-scope */
import './App.css';
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
import {
  StyledAppDiv,
  StyledComponentWindow,
  StyledRadioButtonDiv,
  StyledBodyContainer,
  StyledBody,
  StyledGridDiv,
  GridContainer,
  StyledPieInformationdiv,
  PieFooterContainer,
  TopBarContainer,
} from './styledAppComponents';

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

              <div style={{ height: '100%' }}>
                <TopBarContainer>
                  <TopBar />
                </TopBarContainer>
                <StyledRadioButtonDiv>
                  <FilterButtons />
                </StyledRadioButtonDiv>
                <PieChart
                  data={isLoading ? ['loading', 'loading', 'loading'] : data}
                  outerRadius={142}
                  innerRadius={0}
                />
                <PieFooterContainer>
                  <StyledPieInformationdiv>
                    <PieFooter />
                  </StyledPieInformationdiv>
                </PieFooterContainer>
              </div>

              <StyledGridDiv>
                <GridContainer>
                  <GridTitle />
                </GridContainer>
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
