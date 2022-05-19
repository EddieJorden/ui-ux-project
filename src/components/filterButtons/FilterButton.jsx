/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux';
import { selectFilter } from '../pieChart/pieChartSlice';

function FilterButton(props) {
  const { year } = props;
  const filter = useSelector(selectFilter);

  return (
    <div>
      <div>{year}</div>
      <input
        type="radio"
        value={year}
        name={year}
        checked={filter === year}
        readOnly
      />
    </div>
  );
}

export default FilterButton;
