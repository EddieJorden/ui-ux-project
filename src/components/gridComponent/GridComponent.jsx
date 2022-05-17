/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux';
import GridLineComponent from './GridLineComponent';
import { selectFilterData } from '../pieChart/pieChartSlice';

function GridComponent() {
  const filteredData = useSelector(selectFilterData);

  const dataToDisplay = [filteredData[0], filteredData[1], filteredData[2]];

  let uniqueKey = 0;

  return (
    <div>
      {dataToDisplay.map((each) => {
        uniqueKey += 1;
        return (
          <div key={uniqueKey}>
            <GridLineComponent
              year={each.year}
              course={each.course}
              students={each.students}
              uniqueKey={uniqueKey}
            />
          </div>
        );
      })}
    </div>
  );
}

export default GridComponent;
