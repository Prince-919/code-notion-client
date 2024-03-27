import { server } from '../store';
import axios from 'axios';

// Sign In
export const signin = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'signinRequest' });
    const { data } = await axios.post(
      `${server}/sign-in`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'signinSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'signinFail', payload: error?.response?.data?.message });
  }
};

// Sign Up
export const signup = formdata => async dispatch => {
  try {
    dispatch({ type: 'signupRequest' });
    const { data } = await axios.post(`${server}/sign-up`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    dispatch({ type: 'signupSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'signupFail', payload: error?.response?.data?.message });
  }
};

// Load User
export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({ type: 'loadUserSuccess', payload: data?.user });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error?.response?.data?.message });
  }
};

// Logout
export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({ type: 'logoutSuccess', payload: data?.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error?.response?.data?.message });
  }
};
