/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const pieChartSlice = createSlice({
  name: 'pieChart',
  initialState: {
    filter: 'all',
    filteredData: [
      {
        id: 14,
        year: 2016,
        course: 'English 1C: Applied Composition',
        instructor: 'Lacey Leblanc',
        students: 5,
      },
      {
        id: 15,
        year: 2016,
        course: 'English 1A: Freshman Composition',
        instructor: 'Nikki Mccullough',
        students: 5,
      },
      {
        id: 16,
        year: 2015,
        course: 'English 1C: Applied Composition',
        instructor: 'Kellie Copeland',
        students: 5,
      }],
    coursesArray: [],
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },

    setFilterData(state, action) {
      state.filteredData = action.payload;
      const uniqueCourses = [];
      state.coursesArray = [];

      if (state.filter === 'all') {
        action.payload.forEach((each) => {
          console.log('state filter is all');
          if (!uniqueCourses.includes(each.course)) {
            uniqueCourses.push(each.course);

            state.coursesArray.push({
              course: each.course,
              students: each.students,
              year: each.year,
            });
          }
          if (uniqueCourses.includes(each.course)) {
            state.coursesArray.forEach((course) => {
              if (course.course === each.course) {
                course.students += each.students;
              }
            });
          }
        });
      } if (state.filter !== 'all') {
        console.log('not all', action.payload.filter((item) => item.year === Number(state.filter)));

        action.payload.filter((item) => item.year === Number(state.filter)).forEach((each) => {
          if (!uniqueCourses.includes(each.course)) {
            uniqueCourses.push(each.course);

            state.coursesArray.push({
              course: each.course,
              students: each.students,
              year: each.year,
            });
          }
          if (uniqueCourses.includes(each.course)) {
            state.coursesArray.forEach((course) => {
              if (course.course === each.course) {
                course.students += each.students;
              }
            });
          }
        });
      }
    },
  },
});

export const {
  setFilter, setFilterData,
} = pieChartSlice.actions;
export const selectFilterData = (state) => state.pieChart.filteredData;
export const selectFilter = (state) => state.pieChart.filter;
export const selectCoursesArray = (state) => state.pieChart.coursesArray;
export default pieChartSlice.reducer;
