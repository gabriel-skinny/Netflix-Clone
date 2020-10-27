import React, { useEffect, useRef, useState } from 'react';

import { Container, Left, Right, Detail } from './styles';
import { FaSearch, FaGift, FaBell, FaSortDown ,FaSortUp } from "react-icons/fa"
import logoImg from "../../assets/Netflix_2015_logo.svg"

function Header() {
  const headerRef = useRef(null)
  const [ menuHovered, setMenuHovered] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", function(){
      const scroll = window.scrollY;
      
      if (scroll >= 10 ){
        headerRef.current.id = "black"
      }else{
        headerRef.current.id = ""
      }  
    })

  },[])

  function hoverMenu(){
    setMenuHovered(true)
  }

  function unHoverMenu(){
    setMenuHovered(false)
  }
  
  return (
    <Container ref={headerRef}>
      <Left>
        <img src={logoImg} alt="logo"/>

        <ul>
          <li>Inicio</li>
          <li>Series</li>
          <li>Filmes</li>
          <li>Mais recentes</li>
          <li>Minha lista</li>
        </ul>
      </Left>
      
      <Right>
          <li><FaSearch size={20}/></li>
          <li>INFANTIL</li>
          <li><FaGift size={20}/></li>
          <li><FaBell size={20}/></li>
          <li onMouseEnter={hoverMenu} onMouseLeave={unHoverMenu}>
            <div className="profile"></div>
            <FaSortDown />
          </li>
          {menuHovered && (
            <Detail onMouseEnter={hoverMenu} onMouseLeave={unHoverMenu}>
            <FaSortUp size={30} />
            
            <div className="top">
              <div className="profile-detail">
                <div className="image"></div>
                <h4>Jorge</h4>
              </div>
              <div className="profile-detail">
                <div className="image"></div>
                <h4>Gabriel</h4>
              </div>
              <div className="profile-detail">
                <div className="image"></div>
                <h4>Jorge</h4>
              </div>
              <h4>Gerenciar perfis</h4>
            </div>
            
            <div className="bottom">
              <h4>Conta</h4>
              <h4>Centro de ajuda</h4>
              <h4>Sair do netflix</h4>
            </div>
          </Detail>
          )}
      </Right>
    </Container>
  );
}

export default Header;