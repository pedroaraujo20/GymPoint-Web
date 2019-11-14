import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import api from '~/services/api';
import { formatPrice } from '~/util/format';

import { Table } from '~/components/Table/styles';
import { Title, Button } from '~/components/Title/styles';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');

      const data = response.data.map(plan => ({
        ...plan,
        priceFormatted: formatPrice(plan.price),
      }));

      setPlans(data);
    }

    loadPlans();
  }, []); // eslint-disable-line

  return (
    <>
      <Title maxWidth="900px">
        <h1>Gerenciando planos</h1>
        <Button type="submit" color="#EE4D64">
          <div>
            <MdAdd size={20} color="#FFF" />
          </div>

          <span>CADASTRAR</span>
        </Button>
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
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>
                <span>{plan.title}</span>
              </td>
              <td>
                <span>{plan.duration} mês</span>
              </td>
              <td>
                <span>{plan.priceFormatted}</span>
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
