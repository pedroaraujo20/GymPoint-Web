export function studentListRequest(param) {
  return {
    type: '@student/STUDENT_LIST_REQUEST',
    payload: { param },
  };
}

export function studentListSuccess(list) {
  return {
    type: '@student/STUDENT_LIST_SUCCESS',
    payload: { list },
  };
}

export function studentListFailure() {
  return {
    type: '@student/STUDENT_LIST_FAILURE',
  };
}

export function getStudentRequest(id) {
  return {
    type: '@student/GET_STUDENT_REQUEST',
    payload: { id },
  };
}

export function getStudentSuccess(student) {
  return {
    type: '@student/GET_STUDENT_SUCCESS',
    payload: { student },
  };
}

export function getStudentFailure() {
  return {
    type: '@student/GET_STUDENT_FAILURE',
  };
}

export function addStudentRequest(data) {
  return {
    type: '@student/ADD_STUDENT_REQUEST',
    payload: { data },
  };
}

export function addStudentSuccess(student) {
  return {
    type: '@student/ADD_STUDENT_SUCCESS',
    payload: { student },
  };
}

export function addStudentFailure() {
  return {
    type: '@student/ADD_STUDENT_FAILURE',
  };
}

export function updateStudentRequest(data) {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
    payload: { data },
  };
}

export function updateStudentSuccess(student) {
  return {
    type: '@student/UPDATE_STUDENT_SUCCESS',
    payload: { student },
  };
}

export function updateStudentFailure() {
  return {
    type: '@student/UPDATE_STUDENT_FAILURE',
  };
}

export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_STUDENT_REQUEST',
    payload: { id },
  };
}

export function deleteStudentSuccess() {
  return {
    type: '@student/DELETE_STUDENT_SUCCESS',
  };
}

export function deleteStudentFailure() {
  return {
    type: '@student/DELETE_STUDENT_FAILURE',
  };
}
