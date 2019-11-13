import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '~/components/Table/styles';
import { Title, Button } from '~/components/Title/styles';

export default function Registrations() {
  return (
    <>
      <Title maxWidth="1380px">
        <h1>Gerenciando planos</h1>
        <Button type="submit" color="#EE4D64">
          CADASTRAR
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
          <tr>
            <td>
              <span>Pedro Araujo</span>
            </td>
            <td>
              <span>Diamond</span>
            </td>
            <td>
              <span>30 de Abril de 2019</span>
            </td>
            <td>
              <span>30 de Maio de 2019</span>
            </td>
            <td>
              <span>Não</span>
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
