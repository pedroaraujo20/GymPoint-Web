import produce from 'immer';

const INITIAL_STATE = {
  test: [],
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@students/LIST_STUDENTS': {
        draft.test = action.payload.data;
        break;
      }
      default:
    }
  });
}
