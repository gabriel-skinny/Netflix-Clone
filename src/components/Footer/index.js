import React from 'react';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <div className="uls">
        <ul>
          <li>Idioma Legendas</li>
          <li>Imprensa</li>
          <li>privacidade</li>
          <li>Entre em contato</li>
        </ul>
        <ul>
          <li>Audiodescrição</li>
          <li>Relações com investidores</li>
          <li>Avisos legais</li>
        </ul>
        <ul>
          <li>Centro de ajuda</li>
          <li>Carreiras</li>
          <li>Preferencias de cokkies</li>
        </ul>
        <ul>
          <li>Cartão pré-pago</li>
          <li>Termos de uso</li>
          <li>Informações privada</li>
        </ul>
      </div>

      <button>Código de serviço</button>
      <small>© 1997-2020 Netflix, Inc. </small>
    </Container>
  );
}

export default Footer;