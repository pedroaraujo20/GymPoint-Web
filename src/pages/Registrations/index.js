import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';
import api from '~/services/api';
import { Table } from '~/components/Table/styles';
import { Title, Button } from '~/components/Title/styles';

export default function Registrations() {
  const [regists, setRegists] = useState([]);

  useEffect(() => {
    async function loadRegistrations() {
      const response = await api.get('/registrations');

      setRegists(response.data);
    }

    loadRegistrations();
  }, []); // eslint-disable-line
  return (
    <>
      <Title maxWidth="1380px">
        <h1>Gerenciando planos</h1>
        <Button type="submit" color="#EE4D64">
          <div>
            <MdAdd size={20} color="#FFF" />
          </div>

          <span>CADASTRAR</span>
        </Button>
      </Title>
      <Table maxWidth="1380px">
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INÍCIO</th>
            <th>TÉRMINO</th>
            <th>ATIVA</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {regists.map(reg => (
            <tr key={reg.id}>
              <td>
                <span>{reg.student.name}</span>
              </td>
              <td>
                <span>{reg.plan.title}</span>
              </td>
              <td>
                <span>{reg.start_date}</span>
              </td>
              <td>
                <span>{reg.end_date}</span>
              </td>
              <td>
                <span>{reg.active}</span>
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
