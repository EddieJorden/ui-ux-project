/* eslint-disable react/react-in-jsx-scope */
import { useDispatch } from 'react-redux';
import { setFilter } from '../pieChart/pieChartSlice';

function RadioButtons() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <input type="radio" value="all" name="all" onChange={handleChange} />
      <input type="radio" value="2015" onChange={handleChange} />
      <input type="radio" value="2016" onChange={handleChange} />
    </div>
  );
}

export default RadioButtons;
