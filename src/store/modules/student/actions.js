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
