import React, { useState, useMemo, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import DatePicker from './DatePicker';
import ReactSelect from './AsyncSelector';
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
  const [plan, setPlan] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    loadPlans();
  }, []);

  async function handleSubmit(data) {
    console.log(data);
    /* try {
      await api.post('registrations', data);
      toast.success('Matrícula realizada com sucesso!');
      history.push('/registrations');
    } catch (err) {
      toast.error(err);
    } */
  }

  async function loadPlans() {
    const response = await api.get('plans');
    setPlan(response.data);
  }

  return (
    <>
      <Title maxWidth="1000px">
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
      <FormStyled maxWidth="1000px">
        <Form id="reg-form" onSubmit={handleSubmit} context={{ price }}>
          <label htmlFor="student">ALUNO</label>
          <ReactSelect name="student_id" />

          <div className="inputs">
            <div className="inputs-labels">
              <label htmlFor="plans">PLANO</label>
              <Select name="plans" options={plan} />
            </div>

            <div className="inputs-labels">
              <label htmlFor="start_date">DATA DE INICIO</label>
              <DatePicker name="start_date" />
            </div>

            <div className="inputs-labels">
              <label htmlFor="end_date">DATA DE TÉRMINO</label>
              <Input
                name="end_date"
                type="date"
                disabled
                style={{ backgroundColor: '#DDDDDD' }}
              />
            </div>

            <div className="inputs-labels">
              <label htmlFor="price">VALOR FINAL</label>
              <input
                name="price"
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
