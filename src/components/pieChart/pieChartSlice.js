/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const pieChartSlice = createSlice({
  name: 'pieChart',
  initialState: {
    filter: false,
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

      state.filteredData.map((each) => {
        if (state.coursesArray.length === 0) {
          state.coursesArray.push(each);
        }
      });
    },

    applyFilter(state) {
      state.filteredData.map((each) => {
        state.coursesArray.push(each);
      });
    },
  },
});

export const {
  setFilter, setFilterData,
} = pieChartSlice.actions;
export const selectFilterData = (state) => state.pieChart.filteredData;
export const selectCoursesArray = (state) => state.pieChart.coursesArray;
export default pieChartSlice.reducer;
