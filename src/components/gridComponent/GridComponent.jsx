/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux';
import GridLineComponent from './GridLineComponent';
import { selectCoursesArray } from '../pieChart/pieChartSlice';

function GridComponent() {
  const filteredData = useSelector(selectCoursesArray);

  let uniqueKey = 0;

  return (
    <div>
      {filteredData.map((each) => {
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
