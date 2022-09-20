/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GridLineComponent from './GridLineComponent';
import { selectInstructorsArray, selectSelectedCourseColor, selectCoursesArray } from '../pieChart/pieChartSlice';

const GridComponentDiv = styled.div`
padding: 13px;
border-radius: 5px;
`;

function GridComponent() {
	const filteredData = useSelector(selectInstructorsArray);
	const defaultData = useSelector(selectCoursesArray);
	const color = useSelector(selectSelectedCourseColor);
	let uniqueKey = 0;

	const isStudentsAverage = () => {
		let sumOfStudents = 0;
		let sumOfCourses = null;
		defaultData.forEach((item) => {
			if (typeof item.students === 'number') {
				sumOfStudents += Number(item.students);
				sumOfCourses += 1;
			}
		});
		const averageStudents = sumOfStudents / sumOfCourses;
		return averageStudents;
	};

	if (filteredData.length === 0) {
		return (
			<GridComponentDiv style={{ backgroundColor: 'steelblue' }}>
				{defaultData.map((each) => {
					uniqueKey += 1;
					return (
						<div key={uniqueKey}>
							<GridLineComponent
								year={each.year}
								course={each.course}
								instructor={each.instructor}
								students={each.students}
								uniqueKey={uniqueKey}
								isBold={isStudentsAverage() > each.students ? 'bold' : 'normal'}
							/>
						</div>
					);
				})}
			</GridComponentDiv>
		);
	} if (filteredData.length >= 1) {
		return (
			<GridComponentDiv style={{ backgroundColor: color }}>
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
								isBold={isStudentsAverage() > each.students ? 'bold' : 'normal'}
							/>
						</div>
					);
				})}
			</GridComponentDiv>
		);
	}
}

export default GridComponent;
