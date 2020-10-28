import styled from "styled-components";

export const Container = styled.div`
  height: 340px;
  width: 1200px;
  margin: 0 auto;
  margin-top: -50px;
  color: #7c8080;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  button{ 
    width: 140px;
    height: 30px;
    border: 1px solid #7c8080;
    background: transparent;
    font-size: 12px;
    margin-top: 40px;
    margin-left: 70px;
    color: #7c8080
  }

  small{
    margin-top: 20px;
    margin-left: 70px;
    color: #7c8080
  }

  div.uls{
    display: flex;
    justify-content: space-around;

    ul{
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &:first-child{
        height: 140px;
      }

      li{
        font-size: 14px;
        color: #7c8080
      }
    }
  }
`