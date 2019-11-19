import React from 'react';
import { toast } from 'react-toastify';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '~/services/api';
import history from '~/services/history';

import { Title, Button } from '~/components/Title/styles';
import { Form as FormStyled } from '~/components/Form/styles';

/* const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('O e-mail é obrigatório'),
  age: Yup.number()
    .positive('Idade inválida')
    .required('A idade é obrigatória'),
  weight: Yup.number()
    .positive('Peso inválido')
    .required('O peso é obrigatório'),
  height: Yup.number()
    .positive('Altura inválida')
    .required('A altura é obrigatória'),
}); */

export default function AddPlan() {
  async function handleSubmit(data) {
    try {
      await api.post('plans', data);
      toast.success('Plano cadastrado com sucesso!');
      history.push('/plans');
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
            onClick={() => history.push('/plans')}
            type="button"
            color="#DDDDDD"
          >
            <div>
              <MdKeyboardArrowLeft size={20} color="#FFF" />
            </div>

            <span>VOLTAR</span>
          </Button>
          <Button type="submit" form="plan-form" color="#EE4D64">
            <div>
              <MdDone size={20} color="#FFF" />
            </div>

            <span>SALVAR</span>
          </Button>
        </div>
      </Title>
      <FormStyled maxWidth="900px">
        <Form id="plan-form" onSubmit={handleSubmit}>
          <label htmlFor="title">TÍTULO DO PLANO</label>
          <Input name="title" />

          <div>
            <div>
              <label htmlFor="duration">DURAÇÃO (em meses)</label>
              <Input name="duration" />
            </div>

            <div>
              <label htmlFor="price">PESO (em kg)</label>
              <Input name="price" />
            </div>

            <div>
              <label htmlFor="total">PREÇO TOTAL</label>
              <input disabled />
            </div>
          </div>
        </Form>
      </FormStyled>
    </>
  );
}
