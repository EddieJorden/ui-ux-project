/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux';
import { selectFilterData } from '../pieChart/pieChartSlice';

function PieFooter() {
  const pieData = useSelector(selectFilterData);

  return (
    <div>
      {pieData.filter((each) => each.id < 3).map((each) => (

        <div>
          <div>{each.course}</div>
        </div>
      ))}
    </div>
  );
}

export default PieFooter;
