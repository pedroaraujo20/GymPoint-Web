import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { Table } from '~/components/Table/styles';
import { Title } from '~/components/Title/styles';

export default function Assistances() {
  const [assists, setAssists] = useState([]);

  useEffect(() => {
    async function loadAssists() {
      const response = await api.get('/assists');

      setAssists(response.data);
    }

    loadAssists();
  }, []); // eslint-disable-line
  return (
    <>
      <Title maxWidth="700px">
        <h1>Pedidos de auxílio</h1>
        <div />
      </Title>
      <Table maxWidth="700px">
        <thead>
          <tr>
            <th>ALUNO</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {assists.map(assist => (
            <tr key={assist._id}>
              <td>
                <span>{assist.student_id}</span>
              </td>
              <td>
                <Link to="/">responder</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
