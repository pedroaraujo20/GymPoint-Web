import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';

import { Table } from '~/components/Table/styles';
import { Title, Button } from '~/components/Title/styles';

import { getStudentRequest } from '~/store/modules/student/actions';

export default function Students() {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);

  function handleGetStudent(id) {
    dispatch(getStudentRequest(id));
  }

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');

      setStudents(response.data);
    }

    loadStudents();
  }, []); // eslint-disable-line

  return (
    <>
      <Title maxWidth="1200px">
        <h1>Gerenciando alunos</h1>
        <div>
          <Button
            type="button"
            color="#EE4D64"
            onClick={() => history.push('/students/add')}
          >
            <div>
              <MdAdd size={20} color="#FFF" />
            </div>

            <span>CADASTRAR</span>
          </Button>
          <input type="text" placeholder="Buscar aluno" />
        </div>
      </Title>
      <Table maxWidth="1200px">
        <thead>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>IDADE</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>
                <span>{student.name}</span>
              </td>
              <td>
                <span>{student.email}</span>
              </td>
              <td>
                <span>{student.age}</span>
              </td>
              <td>
                <Link
                  onClick={() => handleGetStudent(student.id)}
                  to={`/students/edit/${student.id}`}
                >
                  editar
                </Link>
                <Link to="/">apagar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
