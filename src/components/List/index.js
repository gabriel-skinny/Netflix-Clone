import React from 'react';

import { Container, Carrousel } from './styles';
import Image from "../Image"

import firstImg from "../../assets/firstImg.jpg"
import secondImage from "../../assets/secondImage.jpg"
import thirdIMage from "../../assets/thirdIMage.jpg"
import forthimage from "../../assets/forfthimage.jpg"
import fiftyImage from "../../assets/fiftyImage.jpg"
import sixImage from "../../assets/sixImage.jpg"
import sevenImg from "../../assets/sevenImg.jpg"
import eightImg from "../../assets/eightImg.jpg"

function List({ title }) {
  return (
    <Container>
      <h1>{title}</h1>

      <Carrousel>
        <Image image={firstImg}/>
        <Image image={secondImage}/>
        <Image image={thirdIMage}/>
        <Image image={forthimage}/>
        <Image image={fiftyImage}/>
        <Image image={sixImage}/>
        <Image image={sevenImg}/>
        <Image image={eightImg}/>
      </Carrousel>
    </Container>
  );
}

export default List;