import styled from 'styled-components';

export const Container = styled.div`
  height: 1000px;
  width: 100%;
  background: url("https://occ-0-1306-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTuejxqf8zqsr0niqjVm_V5bqjQuYeawHqeW4Gxbw9G0_GcRam2EQj2ieo72oTrotKhNZAxbzTuDqBwoRr40fMVR86yN.jpg?r=7aa");
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;  

  img{
    width: 700px;
  }
`;

export const Content = styled.main`
  height: 500px;
  width: 700px;
  margin-left: 70px;
  margin-top: 200px;

  p{
    font-size: 24px;
    line-height: 40px;
  }

  div.buttons{
    margin-top: 30px;
    display: flex;
   
    button{
      padding: 15px 45px;
      margin-right: 10px;

      background: #fff;
      color: #000;

      border: 0;
      border-radius: 5px;

      font-size: 24px;
      
      display: flex;
      align-items: center;

      transition: all 0.2s;
      
      &:hover{
        opacity: 0.7;
      }

      &:nth-child(2){
        background: rgba(199, 199, 199, 0.5);
        color: #fff;
      
        h1{
          color: #fff;
        }
      }

      svg{
        margin-right: 10px;
      }

      div.info{
        border: 4px solid #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;

        svg{
          margin-left: 10px;
        }
      }

      h1{
        color: #000;
        font-size: 24px;
      }
    }
  }
`