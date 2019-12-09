import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Table } from '~/components/Table/styles';
import { Title } from '~/components/Title/styles';
import Modal from '~/components/Modal';

export default function Assistances() {
  const [assists, setAssists] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadAssists() {
      const response = await api.get('/assists');

      setAssists(response.data);
    }

    loadAssists();
  }, []); // eslint-disable-line

  function openModal() {}

  function closeModal() {}

  return (
    <>
      <Title maxWidth="700px">
        <h1>Pedidos de auxílio</h1>
        <div />
      </Title>
      <Table maxWidth="700px">
        <thead>
          <tr>
            <th>PERGUNTA</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {assists.map(assist => (
            <tr key={assist._id}>
              <td>
                <span>{assist.question}</span>
              </td>
              <td>
                <button type="button" onClick={() => setModal(true)}>
                  responder
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {modal && (
        <Modal>
          <span>PERGUNTA DO ALUNO</span>
          <p>
            Olá pessoal da academia, gostaria de saber se quando acordar devo
            ingerir batata doce e frango logo de primeira, preparar as marmitas
            e lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
          </p>
          <span>SUA RESPOSTA</span>
          <textarea />
          <button onClick={() => setModal(false)} type="button">
            Responder aluno
          </button>
        </Modal>
      )}
    </>
  );
}
