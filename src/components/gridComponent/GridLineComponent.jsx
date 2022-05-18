/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from 'styled-components';

const GridLine = styled.div`
display: flex;
width: 100%;
height: 5%;
align-items: center;
justify-content: center
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
      <div style={{ width: '66px' }}>{!year ? 'loading' : year}</div>
      <div style={{ width: '180px' }}>{!course ? 'loading' : course}</div>
      <div style={{ width: '100px' }}>{!instructor ? 'laoding' : instructor}</div>
      <div style={{ width: '42px' }}>{!students ? 'students' : students}</div>
    </GridLine>
  );
}

export default GridLineComponent;
