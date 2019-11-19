import React from 'react';
import { toast } from 'react-toastify';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';
import history from '~/services/history';

import { Title, Button } from '~/components/Title/styles';
import { Form as FormStyled } from '~/components/Form/styles';

export default function AddStudent() {
  async function handleSubmit(data) {
    try {
      await api.post('students', data);
      toast.success('Aluno cadastrado com sucesso!');
      history.push('/students');
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <>
      <Title maxWidth="900px">
        <h1>Cadastro de aluno</h1>
        <div>
          <Button
            onClick={() => history.push('/students')}
            type="button"
            color="#DDDDDD"
          >
            <div>
              <MdKeyboardArrowLeft size={20} color="#FFF" />
            </div>

            <span>VOLTAR</span>
          </Button>
          <Button type="submit" form="student-form" color="#EE4D64">
            <div>
              <MdDone size={20} color="#FFF" />
            </div>

            <span>SALVAR</span>
          </Button>
        </div>
      </Title>
      <FormStyled maxWidth="900px">
        <Form id="student-form" onSubmit={handleSubmit}>
          <label htmlFor="name">NOME COMPLETO</label>
          <Input name="name" placeholder="John Doe" />

          <label htmlFor="email">ENDEREÇO DE E-MAIL</label>
          <Input type="email" name="email" placeholder="exemplo@email.com" />

          <div>
            <div>
              <label htmlFor="age">IDADE</label>
              <Input name="age" />
            </div>

            <div>
              <label htmlFor="weight">PESO (em kg)</label>
              <Input name="weight" />
            </div>

            <div>
              <label htmlFor="height">ALTURA</label>
              <Input name="height" />
            </div>
          </div>
        </Form>
      </FormStyled>
    </>
  );
}
