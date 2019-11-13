import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '~/components/Table/styles';
import { Title, Button } from '~/components/Title/styles';

export default function Students() {
  return (
    <>
      <Title maxWidth="1200px">
        <h1>Gerenciando alunos</h1>
        <div>
          <Button type="submit" color="#EE4D64">
            CADASTRAR
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
          <tr>
            <td>
              <span>Pedro Araujo</span>
            </td>
            <td>
              <span>pedro-foa@hotmail.com</span>
            </td>
            <td>
              <span>24</span>
            </td>
            <td>
              <Link to="/">editar</Link>
              <Link to="/">apagar</Link>
            </td>
          </tr>
          <tr>
            <td>
              <span>Pedro Araujo</span>
            </td>
            <td>
              <span>pedro-foa@hotmail.com</span>
            </td>
            <td>
              <span>24</span>
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
