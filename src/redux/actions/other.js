import { server } from '../store';
import axios from 'axios';

// Get All Courses
export const contactUs = (name, email, message) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };
    dispatch({ type: 'contactRequest' });
    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message },
      config
    );
    dispatch({ type: 'contactSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'contactFail',
      payload: error?.response?.data?.message,
    });
  }
};
// Course Request
export const courseRequest = (name, email, course) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };
    dispatch({ type: 'courseRequestRequest' });
    const { data } = await axios.post(
      `${server}/course-request`,
      { name, email, course },
      config
    );
    dispatch({ type: 'courseRequestSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'courseRequestFail',
      payload: error?.response?.data?.message,
    });
  }
};