import { all, takeLatest, put, call } from "redux-saga/effects";
import { request, setupHttpConfig, restAuthRequest } from "../../utils/http";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  ADD_PHONE_REQUEST,
  ADD_PHONE_SUCCESS,
  ADD_PHONE_ERROR,
  VERIFY_CODE_REQUEST,
  VERIFY_CODE_SUCCESS,
  VERIFY_CODE_ERROR,
  RESEND_EMAIL_REQUEST,
  RESEND_EMAIL_SUCCESS,
  RESEND_EMAIL_ERROR,
  VERIFY_ACCOUNT_REQUEST,
  VERIFY_ACCOUNT_SUCCESS,
  VERIFY_ACCOUNT_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../reducers/AuthReducer";

import { getSimplifiedError } from "../../utils/error";

function login(payload) {
  return request.post("/login/", payload);
}

function* handleLogin(action) {
  try {
    const { status, data } = yield call(login, action.payload);

    if (status === 200) {
      localStorage.setItem("ankit_auth_token", data.token);
      localStorage.setItem("ankit_user", JSON.stringify(data.user));
      setupHttpConfig();
      yield put({
        type: USER_LOGIN_SUCCESS,
        user: data.user,
      });
    } else {
      yield put({
        type: USER_LOGIN_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("login error :", error.response);
    yield put({
      type: USER_LOGIN_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

function register(payload) {
  return request.post("/signup/", payload);
}

function* handleRegister(action) {
  try {
    const { status, data } = yield call(register, action.payload);

    if (status === 201) {
      localStorage.setItem("ankit_user", JSON.stringify(data));
      yield put({
        type: USER_REGISTER_SUCCESS,
        user: data,
      });
    } else {
      yield put({
        type: USER_REGISTER_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("signup error :", error.response);
    yield put({
      type: USER_REGISTER_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

function addPhone(payload) {
  payload["country_code"] = "+1";
  return request.post("/user/add-phone-number/", payload);
}

function* handleAddPhone(action) {
  try {
    const { status } = yield call(addPhone, action.payload);

    if (status === 200) {
      setupHttpConfig();
      yield put({
        type: ADD_PHONE_SUCCESS,
        phone: action.payload.phone_number,
      });
    } else {
      yield put({
        type: ADD_PHONE_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("add phone error :", error.response);
    yield put({
      type: ADD_PHONE_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

function verifyCode(payload) {
  return request.post("/user/verify-phone-number/", payload);
}

function* handleVerifyCode(action) {
  try {
    const { status, data } = yield call(verifyCode, action.payload);

    if (status === 200) {
      setupHttpConfig();
      yield put({
        type: VERIFY_CODE_SUCCESS,
        user: data.user && data.user.data,
      });
    } else {
      yield put({
        type: VERIFY_CODE_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("add phone error :", error.response);
    yield put({
      type: VERIFY_CODE_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

function resendEmail(payload) {
  return request.get(`/signup/${payload.uid}/resend_email_verification/`);
}

function* handleResendEmail(action) {
  try {
    const { status } = yield call(resendEmail, action.payload);

    if (status === 200) {
      yield put({
        type: RESEND_EMAIL_SUCCESS,
      });
    } else {
      yield put({
        type: RESEND_EMAIL_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("resend email error :", error.response);
    yield put({
      type: RESEND_EMAIL_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

function verifyAccount(payload) {
  setupHttpConfig();
  const url = `/email/confirm/?uid=${payload.uid}&token=${payload.token}`;
  return request.get(url);
}

function* handleVerifyAccount(action) {
  try {
    const { payload } = action;
    const { status, data } = yield call(verifyAccount, payload);

    if (status === 200) {
      localStorage.setItem("ankit_auth_token", data.token);
      localStorage.setItem("ankit_user", JSON.stringify(data.user));
      setupHttpConfig();
      yield put({
        type: VERIFY_ACCOUNT_SUCCESS,
        user: data.user,
      });
    } else {
      yield put({
        type: VERIFY_ACCOUNT_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("verify account error :", error.response);
    yield put({
      type: VERIFY_ACCOUNT_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

function deleteUser(payload) {
  return request.delete(`/delete-user/${payload.id}/`);
}

function* handleDeleteUser(action) {
  try {
    const { status } = yield call(deleteUser, action.payload);

    if (status === 200) {
      yield put({
        type: DELETE_USER_SUCCESS,
      });
    } else {
      yield put({
        type: DELETE_USER_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("delete user error :", error.response);
    yield put({
      type: DELETE_USER_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

function forgotPassword(payload) {
  return restAuthRequest.post(`/rest-auth/password/reset/`, payload);
}

function* handleForgotPassword(action) {
  try {
    const { status } = yield call(forgotPassword, action.payload);

    if (status === 200) {
      yield put({
        type: FORGOT_PASSWORD_SUCCESS,
      });
    } else {
      yield put({
        type: FORGOT_PASSWORD_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("forgot password error :", error.response);
    yield put({
      type: FORGOT_PASSWORD_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

function resetPassword(payload) {
  return restAuthRequest.post(`/rest-auth/password/reset/confirm/`, payload);
}

function* handleResetPassword(action) {
  try {
    const { status } = yield call(resetPassword, action.payload);

    if (status === 200) {
      yield put({
        type: RESET_PASSWORD_SUCCESS,
      });
    } else {
      yield put({
        type: RESET_PASSWORD_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("reset password error :", error.response);
    yield put({
      type: RESET_PASSWORD_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

function logout() {
  return request.post(`/signout/`);
}

function* handleLogout() {
  try {
    const { status } = yield call(logout);

    if (status === 200) {
      yield put({
        type: LOGOUT_SUCCESS,
      });
      localStorage.clear();
      window.location.reload();
    } else {
      yield put({
        type: LOGOUT_ERROR,
        error: "Something went wrong, Please try again later",
      });
    }
  } catch (error) {
    console.log("logout error :", error.response);
    yield put({
      type: LOGOUT_ERROR,
      error:
        getSimplifiedError(error) ||
        "Something went wrong, Please try again later",
    });
  }
}

export default all([
  takeLatest(USER_LOGIN_REQUEST, handleLogin),
  takeLatest(USER_REGISTER_REQUEST, handleRegister),
  takeLatest(ADD_PHONE_REQUEST, handleAddPhone),
  takeLatest(VERIFY_CODE_REQUEST, handleVerifyCode),
  takeLatest(RESEND_EMAIL_REQUEST, handleResendEmail),
  takeLatest(VERIFY_ACCOUNT_REQUEST, handleVerifyAccount),
  takeLatest(DELETE_USER_REQUEST, handleDeleteUser),
  takeLatest(FORGOT_PASSWORD_REQUEST, handleForgotPassword),
  takeLatest(RESET_PASSWORD_REQUEST, handleResetPassword),
  takeLatest(LOGOUT_REQUEST, handleLogout),
]);
