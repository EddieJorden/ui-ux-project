/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux';
import { selectCoursesArray } from '../pieChart/pieChartSlice';

function PieFooter() {
  const pieData = useSelector(selectCoursesArray);

  let uniqueKey = 1;

  return (
    <div>
      {pieData.map((each) => {
        uniqueKey += 1;
        return (
          <div key={uniqueKey}>
            <div>{each.course}</div>
            <div>
              <div>
                Students:
                <span>
                  {' '}
                  {each.students}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PieFooter;
