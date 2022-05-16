/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import { selectFilter } from '../pieChart/pieChartSlice';

function TopBar() {
  const year = useSelector(selectFilter);

  return (
    <div>
      {!year ? 'Students By All Years' : `Students By ${year}`}

    </div>
  );
}

export default TopBar;
