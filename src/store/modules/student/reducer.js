import produce from 'immer';

const INITIAL_STATE = {
  student: null,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/ADD_STUDENT_SUCCESS': {
        draft.student = action.payload.student;
        break;
      }
      case '@student/GET_STUDENT_SUCCESS': {
        draft.student = action.payload.student;
        break;
      }
      case '@student/UPDATE_STUDENT_SUCCESS': {
        draft.student = action.payload.student;
        break;
      }
      case '@student/DELETE_STUDENT_SUCCESS': {
        draft.student = null;
        break;
      }
      default:
    }
  });
}
