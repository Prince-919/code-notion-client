import { server } from '../store';
import axios from 'axios';

// Update Profile
export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch({ type: 'updateProfileRequest' });
    const { data } = await axios.put(
      `${server}/update-profile`,
      {
        name,
        email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'updateProfileSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'updateProfileFail',
      payload: error?.response?.data?.message,
    });
  }
};
// Update Profile Picture
export const updateProfilePicture = formdata => async dispatch => {
  try {
    dispatch({ type: 'updateProfilePictureRequest' });
    const { data } = await axios.put(
      `${server}/update-profile-picture`,
      formdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'updateProfilePictureSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'updateProfilePictureFail',
      payload: error?.response?.data?.message,
    });
  }
};

// Change Password
export const changePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch({ type: 'changePasswordRequest' });
    const { data } = await axios.put(
      `${server}/change-password`,
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'changePasswordSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'changePasswordFail',
      payload: error?.response?.data?.message,
    });
  }
};

// Forget Password
export const forgetPassword = email => async dispatch => {
  try {
    dispatch({ type: 'forgetPasswordRequest' });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/forget-password`,
      { email },
      config
    );
    dispatch({ type: 'forgetPasswordSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'forgetPasswordFail',
      payload: error?.response?.data?.message,
    });
  }
};

// Reset Password
export const resetPassword = (token, password) => async dispatch => {
  try {
    dispatch({ type: 'resetPasswordRequest' });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };
    const { data } = await axios.put(
      `${server}/reset-password/${token}`,
      {
        password,
      },
      config
    );
    dispatch({ type: 'resetPasswordSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'resetPasswordFail',
      payload: error?.response?.data?.message,
    });
  }
};

// Add To Playlist
export const addToPlaylist = id => async dispatch => {
  try {
    dispatch({ type: 'addToPlaylistRequest' });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/add-to-playlist`,
      {
        id,
      },
      config
    );
    dispatch({ type: 'addToPlaylistSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'addToPlaylistFail',
      payload: error?.response?.data?.message,
    });
  }
};
// Remove From Playlist
export const removeFromPlaylist = id => async dispatch => {
  try {
    dispatch({ type: 'removeFromPlaylistRequest' });
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${server}/remove-from-playlist?id=${id}`,
      config
    );
    dispatch({ type: 'removeFromPlaylistSuccess', payload: data?.message });
  } catch (error) {
    dispatch({
      type: 'removeFromPlaylistFail',
      payload: error?.response?.data?.message,
    });
  }
};
