import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { addStudentSuccess, addStudentFailure } from './actions';

export function* addStudent({ payload }) {
  try {
    const { name, email, age, weigth, height } = payload.data;

    const response = yield call(api.post, 'students', payload.data);

    toast.success('Novo estudante adicionado!');

    yield put(addStudentSuccess(response.data));
    history.push('/students');
  } catch (err) {
    console.tron.log(err);
    toast.error('Erro ao adicionar um novo estudante.');
    yield put(addStudentFailure());
  }
}

export default all([takeLatest('@student/ADD_STUDENT_REQUEST', addStudent)]);
