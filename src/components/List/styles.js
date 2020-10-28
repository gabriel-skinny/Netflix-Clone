import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: -160px;
  margin-left: 60px;
  margin-bottom: 40px;
  overflow: hidden;
  z-index: 5;


  h1{
    font-size: 25px;
  }

  button{
      position: absolute;
      z-index: 99;
      height: 60px;
      width: 60px;
      background: transparent;
      border: 0;
      transition: all 0.2s;

      &:hover{
        scale: 1.2;
      }

      &.rightButton{
        top: 110px;
        right: -15px;
      }

      &.leftButton{
        top: 100px;
        left: -15px;
      }
  }

`;

export const Carrousel = styled.div`
  width: 140%;
  display: flex;
  transition: all ease-in-out 0.3s;

  &#translateX0{
    transform: translateX(0px);
  }

  &#translateX500{
    transform: translateX(-500px);
  }
  &#translateX1000{
    transform: translateX(-1000px);
  }
  
`