import { server } from '../store';
import axios from 'axios';

// Create Course
export const createCourse = formData => async dispatch => {
  try {
    dispatch({ type: 'createCourseRequest' });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/create-course`,
      formData,
      config
    );
    dispatch({ type: 'createCourseSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'createCourseFail',
      payload: error?.response?.data?.message,
    });
  }
};
// Delete Course
export const deleteCourse = id => async dispatch => {
  try {
    dispatch({ type: 'deleteCourseRequest' });
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(`${server}/course/${id}`, config);
    dispatch({ type: 'deleteCourseSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'deleteCourseFail',
      payload: error?.response?.data?.message,
    });
  }
};

// Add Lecture
export const addLecture = (id, formdata) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    dispatch({ type: 'addLectureRequest' });
    const { data } = await axios.post(
      `${server}/course/${id}`,
      formdata,
      config
    );
    dispatch({ type: 'addLectureSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'addLectureFail',
      payload: error?.response?.data?.message,
    });
  }
};
// Delete Lecture
export const deleteLecture = (courseId, lectureId) => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'deleteLectureRequest' });
    const { data } = await axios.delete(
      `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
      config
    );
    dispatch({ type: 'deleteLectureSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'deleteLectureFail',
      payload: error?.response?.data?.message,
    });
  }
};
// Get All Users
export const getAllUsers = (courseId, lectureId) => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'getAllUsersRequest' });
    const { data } = await axios.get(`${server}/admin/users`, config);
    dispatch({ type: 'getAllUsersSuccess', payload: data?.users });
  } catch (error) {
    dispatch({
      type: 'getAllUsersFail',
      payload: error?.response?.data?.message,
    });
  }
};
// Update User Role
export const updateUserRole = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'updateUserRoleRequest' });
    const { data } = await axios.put(`${server}/admin/user/${id}`, {}, config);
    dispatch({ type: 'updateUserRoleSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'updateUserRoleFail',
      payload: error?.response?.data?.message,
    });
  }
};
//Delete User
export const deleteUser = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'deleteUserRequest' });
    const { data } = await axios.delete(`${server}/admin/user/${id}`, config);
    dispatch({ type: 'deleteUserSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'deleteUserFail',
      payload: error?.response?.data?.message,
    });
  }
};
//Delete User
export const getDashboardStats = () => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'getAdminStatsRequest' });
    const { data } = await axios.get(`${server}/admin/stats`, config);
    dispatch({ type: 'getAdminStatsSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'getAdminStatsFail',
      payload: error?.response?.data?.message,
    });
  }
};
