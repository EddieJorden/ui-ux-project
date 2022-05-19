/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectFilter, setFilter, setSelectedCourseColor } from '../pieChart/pieChartSlice';
import FilterButton from './FilterButton';

const FilterButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly
`;

function FilterButtons() {
  const dispatch = useDispatch();
  const yearFilter = useSelector(selectFilter);
  const buttonsArray = [{ year: 'All Years' }, { year: '2015' }, { year: '2016' }];
  let uniqueKey = 1;

  const handleClick = (e) => {
    if (e.target.value !== yearFilter) {
      dispatch(setFilter(e.target.value));
      dispatch(setSelectedCourseColor('white'));
      buttonsArray.map((button) => button.clicked = true);
    }
  };

  return (
    <FilterButtonDiv>
      <div style={{ display: 'flex' }}>
        {buttonsArray.map((each) => {
          uniqueKey += 1;
          return (
            <form key={uniqueKey} onChange={handleClick}>
              <FilterButton year={each.year} />
            </form>
          );
        })}
      </div>
    </FilterButtonDiv>
  );
}

export default FilterButtons;
