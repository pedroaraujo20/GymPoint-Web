import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '~/services/api';
import history from '~/services/history';

import { Title, Button } from '~/components/Title/styles';
import { Form as FormStyled } from '~/components/Form/styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  duration: Yup.number()
    .integer()
    .positive('Valor negativo')
    .typeError('Campo obrigatorio')
    .required('Campo obritatório'),
  price: Yup.number()
    .positive('Valor negativo')
    .typeError('Campo obrigatorio')
    .required('Campo obrigatório'),
});

export default function NewRegistration() {
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  async function handleSubmit(data) {
    try {
      await api.post('registrations', data);
      toast.success('Matrícula realizada com sucesso!');
      history.push('/registrations');
    } catch (err) {
      toast.error(err);
    }
  }

  const total = useMemo(() => price * duration, [price, duration]);

  return (
    <>
      <Title maxWidth="900px">
        <h1>Cadastro de matrícula</h1>
        <div>
          <Button
            onClick={() => history.goBack()}
            type="button"
            color="#DDDDDD"
          >
            <div>
              <MdKeyboardArrowLeft size={20} color="#FFF" />
            </div>

            <span>VOLTAR</span>
          </Button>
          <Button type="submit" form="reg-form" color="#EE4D64">
            <div>
              <MdDone size={20} color="#FFF" />
            </div>

            <span>SALVAR</span>
          </Button>
        </div>
      </Title>
      <FormStyled maxWidth="900px">
        <Form id="reg-form" onSubmit={handleSubmit} schema={schema}>
          <label htmlFor="title">ALUNO</label>
          <Input name="title" />

          <div>
            <div>
              <label htmlFor="duration">PLANO</label>
              <Input
                type="number"
                name="duration"
                onChange={e => setDuration(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="price">DATA DE INICIO</label>
              <Input name="price" onChange={e => setPrice(e.target.value)} />
            </div>

            <div>
              <label htmlFor="total">DATA DE TÉRMINO</label>
              <input
                value={total}
                disabled
                style={{ backgroundColor: '#DDDDDD' }}
              />
            </div>

            <div>
              <label htmlFor="total">VALOR FINAL</label>
              <input
                value={total}
                disabled
                style={{ backgroundColor: '#DDDDDD' }}
              />
            </div>
          </div>
        </Form>
      </FormStyled>
    </>
  );
}
