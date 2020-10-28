import React, { useRef, useState } from 'react';

import { Container, Carrousel } from './styles';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
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
  const carrouselRef = useRef(null)
  const arrowRightRef = useRef(null)
  const [arrowLeft, setArrowLeft] = useState(false)

  let px = 0;

  function handleCarrouselRight(){
    
    if (px < 1000){
      px = px + 500;
    }

    if (px >= 1000){
      arrowRightRef.current.style.display = "none";
    }

    carrouselRef.current.id = `translateX${px}`;
    console.log()

    setArrowLeft(true)
  }
  
  function handleCarrouselLeft(){
    px = px - 500;
    
    arrowRightRef.current.style.display = "block";

    console.log(px);

    carrouselRef.current.id = `translateX${px}`;

    if (px <= 0 ){
      setArrowLeft(false)
    }
  }

  return (
    <Container>
      <h1>{title}</h1>

      {arrowLeft && (
        <button className="leftButton" onClick={handleCarrouselLeft}>
          <FaChevronLeft size={35} fill="#fff"/>
        </button>
      )}

      <Carrousel ref={carrouselRef}>
        <Image image={firstImg}/>
        <Image image={secondImage}/>
        <Image image={thirdIMage}/>
        <Image image={forthimage}/>
        <Image image={fiftyImage}/>
        <Image image={sixImage}/>
        <Image image={sevenImg}/>
        <Image image={eightImg}/>
      </Carrousel>

      <button className="rightButton" ref={arrowRightRef}>
        <FaChevronRight size={35} fill="#fff" onClick={handleCarrouselRight}/>
      </button>
    </Container>
  );
}

export default List;