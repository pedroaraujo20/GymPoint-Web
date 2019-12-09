import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAdd } from 'react-icons/md';
import history from '~/services/history';

import api from '~/services/api';
import { Table } from '~/components/Table/styles';
import { Title, Button } from '~/components/Title/styles';

export default function Registrations() {
  const [regists, setRegists] = useState([]);

  function formatDate(date) {
    return format(parseISO(date), "d 'de' MMMM 'de' yyyy", {
      locale: pt,
    });
  }

  useEffect(() => {
    async function loadRegistrations() {
      const response = await api.get('/registrations');

      const data = response.data.map(reg => ({
        ...reg,
        start_date: formatDate(reg.start_date),
        end_date: formatDate(reg.end_date),
      }));

      setRegists(data);
    }

    loadRegistrations();
  }, []); // eslint-disable-line
  return (
    <>
      <Title maxWidth="1380px">
        <h1>Gerenciando planos</h1>
        <Button
          onClick={() => history.push('/registrations/new')}
          type="button"
          color="#EE4D64"
        >
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
                <span>{reg.active ? 'Sim' : 'Não'}</span>
              </td>
              <td>
                <button type="button">editar</button>
                <button type="button">apagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
