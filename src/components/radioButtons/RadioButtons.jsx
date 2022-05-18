/* eslint-disable react/react-in-jsx-scope */
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFilter } from '../pieChart/pieChartSlice';
import RadioButton from './RadioButtonComponent';

const RadioButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly
`;

function RadioButtons() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <RadioButtonsDiv>
      <RadioButton value="All Years" handleChange={handleChange} />
      <RadioButton value="2015" handleChange={handleChange} />
      <RadioButton value="2016" handleChange={handleChange} />
    </RadioButtonsDiv>
  );
}

export default RadioButtons;
