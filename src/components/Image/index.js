import React, { useState } from 'react';

import { Container } from './styles';
import { FaPlay, FaCheck, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"

function Image({ image }) {
  const [ menuHovered, setMenuHovered] = useState(false)


  function hoverMenu(){
    setMenuHovered(true)
  }

  function unHoverMenu(){
    setMenuHovered(false)
  }
  
  return (
    <Container>
      <div className="content" onMouseEnter={hoverMenu} onMouseLeave={unHoverMenu}>
        <img src={image} alt={image} />
      
        {menuHovered && (
          <div className="detail" >
            <div className="icons">
              <div className="icon">
                <FaPlay size={20}/>
              </div>
              <div className="icon">
                <FaCheck size={20}/>
              </div>
              <div className="icon">
                <FaRegThumbsUp size={20}/>
              </div>
              <div className="icon">
                <FaRegThumbsDown size={20}/>
              </div>
            </div>

            <p><b>T1:E1</b>"Primeiro Episodio"</p>
        </div>
        )}
      </div>  

    </Container>
  );
}

export default Image;