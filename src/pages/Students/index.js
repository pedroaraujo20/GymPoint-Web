import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import api from '~/services/api';

import { Table } from '~/components/Table/styles';
import { Title, Button } from '~/components/Title/styles';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');

      setStudents(response.data);
    }

    loadStudents();
  }, [students]);

  return (
    <>
      <Title maxWidth="1200px">
        <h1>Gerenciando alunos</h1>
        <div>
          <Button type="submit" color="#EE4D64">
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
                <Link to="/">editar</Link>
                <Link to="/">apagar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
