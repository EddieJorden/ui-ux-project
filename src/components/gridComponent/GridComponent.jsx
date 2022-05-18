/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GridLineComponent from './GridLineComponent';
import { selectInstructorsArray } from '../pieChart/pieChartSlice';

const GridComponentDiv = styled.div`
`;

function GridComponent() {
  const filteredData = useSelector(selectInstructorsArray);
  let uniqueKey = 0;

  const isStudentsAverage = () => {
    let sumOfStudents = 0;
    let sumOfCourses = null;
    filteredData.forEach((item) => {
      if (typeof item.students === 'number') {
        sumOfStudents += Number(item.students);
        sumOfCourses += 1;
      }
    });
    const averageStudents = sumOfStudents / sumOfCourses;
    return averageStudents;
  };

  return (
    <GridComponentDiv>
      {filteredData.map((each) => {
        uniqueKey += 1;
        return (
          <div key={uniqueKey}>
            <GridLineComponent
              year={each.year}
              course={each.course}
              instructor={each.instructor}
              students={each.students}
              uniqueKey={uniqueKey}
              isBold={isStudentsAverage() < each.students ? 'bold' : 'normal'}
            />
          </div>
        );
      })}
    </GridComponentDiv>
  );
}

export default GridComponent;
