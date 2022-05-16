/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from 'styled-components';

const GridLine = styled.div`
display: flex;
width: 100%;
height: 5%;
`;

function GridLineComponent(props) {
  const {
    year, course, instructor, students, uniqueKey,
  } = props;

  const color = () => {
    if (uniqueKey % 2 === 0) {
      return '#6e40aa';
    } return '#2aea8c';
  };

  return (
    <GridLine style={{ backgroundColor: color() }}>
      <div>{!year ? 'loading' : year}</div>
      <div>{!course ? 'loading' : course}</div>
      <div>{!instructor ? 'laoding' : instructor}</div>
      <div>{!students ? 'students' : students}</div>
    </GridLine>
  );
}

export default GridLineComponent;
