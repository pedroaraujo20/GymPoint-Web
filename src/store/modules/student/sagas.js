import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  addStudentSuccess,
  addStudentFailure,
  getStudentSuccess,
  getStudentFailure,
  updateStudentSuccess,
  updateStudentFailure,
} from './actions';

export function* getStudent({ payload }) {
  try {
    const response = yield call(api.get, `students/${payload.id}`);

    yield put(getStudentSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
    yield put(getStudentFailure());
  }
}

export function* addStudent({ payload }) {
  try {
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

export function* updateStudent({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.put, `students/${id}`, payload.data);

    toast.success('Estudante atualizado com sucesso!');

    yield put(updateStudentSuccess(response.data));
    history.push('/students');
  } catch (err) {
    console.tron.log(err);
    toast.error('Erro ao atualizar o estudante. Favor verificar os dados!');
    yield put(updateStudentFailure());
  }
}

export default all([
  takeLatest('@student/ADD_STUDENT_REQUEST', addStudent),
  takeLatest('@student/GET_STUDENT_REQUEST', getStudent),
  takeLatest('@student/UPDATE_STUDENT_REQUEST', updateStudent),
]);
