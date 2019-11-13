import api from '~/services/api';

export function loadStudents() {
  return {
    type: '@students/LIST_STUDENTS',
    payload: api.get('/students'),
  };
}
