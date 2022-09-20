/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCourseFilter } from '../pieChart/pieChartSlice';

const GridTitleContainer = styled.div`
  font-size: 24px;
`;

function GridTitle() {
	const gridTitle = useSelector(selectCourseFilter);

	return (
		<GridTitleContainer>
			{gridTitle || ''}
		</GridTitleContainer>
	);
}

export default GridTitle;
