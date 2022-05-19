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

  const handleClick = (e) => {
    if (e.target.value !== yearFilter) {
      dispatch(setFilter(e.target.value));
      dispatch(setSelectedCourseColor('white'));
    }
    e.target.cliced = false;
  };

  return (
    <FilterButtonDiv>
      <FilterButton class="All Years" value="All Years" handleClick={handleClick} />
      <FilterButton value="2015" handleClick={handleClick} />
      <FilterButton value="2016" handleClick={handleClick} />
    </FilterButtonDiv>
  );
}

export default FilterButtons;
