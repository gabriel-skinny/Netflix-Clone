import React from 'react';

import { Container, Content } from './styles';
import imgTitle from "../../assets/title.png"
import { FaPlay, FaInfo } from "react-icons/fa"


function Main() {
  return (
    <Container>
      <Content>
        <img src={imgTitle} alt="title"/>
        <p>
          Ele é um britânico e gostar de ler. Ela é uma americana 
          e idolatrada. Os opostos atraem...os paparazzi.
        </p>
        <div className="buttons">
          <button>
            <FaPlay fill="#000"/>
            <h1>Assitir</h1>
          </button>
          <button>
            <div className="info"><FaInfo /></div>
            <h1>Mais informações</h1>
          </button>
        </div>
      </Content>
      
    </Container>
  );
}

export default Main;