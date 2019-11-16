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
