/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const pieChartSlice = createSlice({
  name: 'pieChart',
  initialState: {
    filter: 'All Years',
    filteredData: [],
    coursesArray: [],
    instructorsArray: [],
    pieFooterArray: [],
    selectedCourse: '',
    selectedCourseColor: '',

  },

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
      state.instructorsArray = [];
      state.selectedCourse = '';
    },

    setFilterData(state, action) {
      state.filteredData = action.payload;
      const uniqueCourses = [];
      state.coursesArray = [];

      if (state.filter === 'All Years') {
        action.payload.forEach((each) => {
          if (!uniqueCourses.includes(each.course)) {
            uniqueCourses.push(each.course);
            state.coursesArray.push({
              course: each.course,
              students: each.students,
              year: each.year,
              instructor: each.instructor,
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
      } if (state.filter !== 'All Years') {
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
    updateFilter(state, action) {
      state.selectedCourse = action.payload;
    },
    setGridData(state) {
      const uniqueInstructor = [];
      state.instructorsArray = [{
        year: 'Year', course: 'Course', instructor: 'Instructor', students: 'Students',
      }];

      if (state.filter === 'All Years') {
        state.filteredData.forEach((each) => {
          if (each.course === state.selectedCourse && !uniqueInstructor.includes(each.instructor)) {
            uniqueInstructor.push(each.instructor);

            state.instructorsArray.push({
              year: each.year,
              course: each.course,
              instructor: each.instructor,
              students: each.students,
            });
          }
          if (uniqueInstructor.includes(each.instructor)) {
            state.instructorsArray.forEach((instructor) => {
              if (instructor.course === each.course
                && instructor.instructor === each.instructor) {
                instructor.students += each.students;
              }
            });
          }
        });
      } if (state.filter !== 'All Years') {
        state.filteredData.filter((item) => item.year === Number(state.filter)).forEach((each) => {
          if (each.course === state.selectedCourse && !uniqueInstructor.includes(each.instructor)) {
            uniqueInstructor.push(each.instructor);

            state.instructorsArray.push({
              year: each.year,
              course: each.course,
              instructor: each.instructor,
              students: each.students,
            });
          }
          if (uniqueInstructor.includes(each.instructor)) {
            state.instructorsArray.forEach((instructor) => {
              if (instructor.course === each.course
                && instructor.instructor === each.instructor) {
                instructor.students += each.students;
              }
            });
          }
        });
      }
    },
    setCourseFilter(state, action) {
      state.selectedCourse = action.payload;
    },
    setSelectedCourseColor(state, action) {
      state.selectedCourseColor = action.payload;
    },
    setPieFooterArray(state, action) {
      state.pieFooterArray.push(action);
    },
  },
});

export const {
  setFilter,
  setFilterData,
  updateFilter,
  setCourseFilter,
  setGridData,
  setSelectedCourseColor,
  setPieFooterArray,
} = pieChartSlice.actions;
export const selectFilterData = (state) => state.pieChart.filteredData;
export const selectFilter = (state) => state.pieChart.filter;
export const selectCoursesArray = (state) => state.pieChart.coursesArray;
export const selectCourseFilter = (state) => state.pieChart.selectedCourse;
export const selectInstructorsArray = (state) => state.pieChart.instructorsArray;
export const selectSelectedCourseColor = (state) => state.pieChart.selectedCourseColor;
export const selectPieFooterArray = (state) => state.pieChart.pieFooterArray;

export default pieChartSlice.reducer;
