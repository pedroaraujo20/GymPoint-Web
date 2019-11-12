import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logoHeader.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/registrations">MATRÍCULAS</Link>
          <Link to="/assistances">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Pedro Felipe de Oliveira Araujo</strong>
              <button type="submit">sair do sistema</button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
