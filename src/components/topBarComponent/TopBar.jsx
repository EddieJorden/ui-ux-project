/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import { selectFilter } from '../pieChart/pieChartSlice';

function TopBar() {
  const year = useSelector(selectFilter);

  const currentFilter = `Students filtered by ${year}`;

  return (
    <div style={{ width: '100%' }}>
      {currentFilter}
    </div>
  );
}

export default TopBar;
