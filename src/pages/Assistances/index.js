import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '~/components/Table/styles';
import { Title } from '~/components/Title/styles';

export default function Assistances() {
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
          <tr>
            <td>
              <span>Pedro Araujo</span>
            </td>
            <td>
              <Link to="/">responder</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
