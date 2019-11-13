import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '~/components/Table/styles';
import { Title } from '~/components/Title/styles';

export default function Plans() {
  return (
    <>
      <Title maxWidth="900px">
        <h1>Gerenciando planos</h1>
        <button type="submit">CADASTRAR</button>
      </Title>
      <Table maxWidth="900px">
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Start</span>
            </td>
            <td>
              <span>1 mês</span>
            </td>
            <td>
              <span>R$129,00</span>
            </td>
            <td>
              <Link to="/">editar</Link>
              <Link to="/">apagar</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
