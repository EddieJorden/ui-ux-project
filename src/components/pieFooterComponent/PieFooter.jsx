/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux';
import { selectPieFooterArray } from '../pieChart/pieChartSlice';

function PieFooter() {
	const pieData = useSelector(selectPieFooterArray);

	let uniqueKey = 1;

	return (
		<div>
			{pieData.map((each) => {
				uniqueKey += 1;
				return (
					<div key={uniqueKey} style={{ display: 'flex' }}>
						<div style={{
							width: '18px', height: '18px', backgroundColor: each.payload.color, margin: '8px',
						}}
						/>
						<div style={{
							display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
						}}
						>
							{each.payload.course}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default PieFooter;
