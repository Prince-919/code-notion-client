import { server } from '../store';
import axios from 'axios';

// Get All Courses
export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });
      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`
      );
      dispatch({ type: 'allCoursesSuccess', payload: data?.courses });
    } catch (error) {
      dispatch({
        type: 'allCoursesFail',
        payload: error?.response?.data?.message,
      });
    }
  };
// Get  Course Lectures
export const getCourseLectures = id => async dispatch => {
  try {
    dispatch({ type: 'getCourseRequest' });
    const { data } = await axios.get(`${server}/course/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'getCourseSuccess', payload: data?.lectures });
  } catch (error) {
    dispatch({
      type: 'getCourseFail',
      payload: error?.response?.data?.message,
    });
  }
};
