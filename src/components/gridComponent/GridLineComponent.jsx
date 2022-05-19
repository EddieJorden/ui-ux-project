/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectSelectedCourseColor } from '../pieChart/pieChartSlice';

const GridLine = styled.div`
display: flex;
max-width: 100%;
height: 5%;
align-items: center;
justify-content: center;

@media only screen and (max-width: 1096px) {
  .year {
    display: none
  }

  .course {
    display: none
  }
}
`;

function GridLineComponent(props) {
  const {
    year, course, instructor, students, uniqueKey, isBold,
  } = props;

  const color = useSelector(selectSelectedCourseColor);

  const backgroundColor = () => {
    if (uniqueKey % 2 === 0) {
      return '#ffffff';
    } return color;
  };

  return (
    <GridLine style={{ backgroundColor: backgroundColor() }}>
      <div className="year" style={{ width: '66px' }}>{!year ? 'loading' : year}</div>
      <div className="course" style={{ width: '180px' }}>{!course ? 'loading' : course}</div>
      <div style={{ width: '100px' }}>{!instructor ? 'laoding' : instructor}</div>
      <div style={{ width: '100px', fontWeight: isBold }}>{!students ? 'students' : students}</div>
    </GridLine>
  );
}

export default GridLineComponent;
