import styled from 'styled-components';

export const Container = styled.div`
  div.content{
    position: relative;
    z-index: 5;
    width: 320px;
    height: 180px;
    margin-right: 5px;
    background: #242424;
    transition: all 0.3s;


    &:hover{
      z-index: 10;
      width: 400px;
      height: 320px;
      transform: translateX(10px);

    }

    &:hover > img {
      scale: 1 !important;
    }

    &:hover > div.detail{
      scale: 0.8;
    }

    img{
        width: 100%;
        height: 180px;
        border-radius: 10px;
    
    }
      
      


  div.detail{
    display: none;
    height: 90px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    transform: scale(1.2);
    

    p{
      margin-left: 10px;
    }
    
    div.icons{
      display: flex;
      align-items: center;


      div.icon{
      width: 50px;
      height: 50px;
      border: 2px solid #ccc;
      border-radius: 50%;
      background: #151515;
      margin-left: 10px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    }
  }
}
  
  
`;
