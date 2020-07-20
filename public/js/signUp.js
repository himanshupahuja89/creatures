/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const SignUp = async (name,email,password,passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'SignUp successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 100);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
