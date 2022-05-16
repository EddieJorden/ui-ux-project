/* eslint-disable react/react-in-jsx-scope */
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFilter } from '../pieChart/pieChartSlice';

const RadioButtonsDiv = styled.div`
  display: flex;
  align-items: center
`;

const ButtonDiv = styled.div`
  margin: 10px
`;

function RadioButtons() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <RadioButtonsDiv>
      <ButtonDiv>
        <div>
          ALL YEARS
        </div>
        <input type="radio" value="all" name="all" onChange={handleChange} />
      </ButtonDiv>
      <div>
        <div>
          2015
        </div>
        <input type="radio" value="2015" name="2015" onChange={handleChange} />
      </div>
      <div>
        <div>
          2016
        </div>
        <input type="radio" value="2016" name="2016" onChange={handleChange} />
      </div>
    </RadioButtonsDiv>
  );
}

export default RadioButtons;
