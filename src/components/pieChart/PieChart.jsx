/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as d3 from 'd3';
import { selectCoursesArray, setCourseFilter, setGridData } from './pieChartSlice';

function PieChart(props) {
  const {
    outerRadius,
    innerRadius,
  } = props;

  const dispatch = useDispatch();

  const handleClick = (d) => {
    // eslint-disable-next-line no-underscore-dangle
    const data = d.target.__data__.data.course;
    // eslint-disable-next-line no-underscore-dangle
    dispatch(setCourseFilter(data));
    dispatch(setGridData());
  };

  const filteredData = useSelector(selectCoursesArray);

  const margin = {
    top: 50, right: 50, bottom: 50, left: 50,
  };

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateCool)
    .domain([0, 3]);

  useEffect(() => {
    drawChart();
  }, [filteredData]);

  function drawChart() {
    // Remove the old svg
    d3.select('#pie-container')
      .select('svg')
      .remove();

    // Create new svg
    const svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.students);

    const arc = svg
      .selectAll()
      .data(pieGenerator(filteredData))
      .enter();

    // Append arcs
    arc
      .append('path')
      .attr('d', arcGenerator)
      // eslint-disable-next-line no-underscore-dangle
      .on('click', handleClick)
      .style('fill', (_, i) => colorScale(i))
      .style('stroke', '#ffffff')
      .style('stroke-width', 0);

    // Append text labels
    arc
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((d) => d.data.course)
      .style('fill', (_, i) => colorScale(filteredData.length - i))
      .attr('transform', (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }

  return <div id="pie-container" />;
}

export default PieChart;