import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 68px;
  width: 100%;
  z-index: 10;
  
  display: flex;
  justify-content: space-between;
  align-items: center; 

  transition: all ease-in 0.5s;
  
  &#black{
    background: rgba(20, 20, 20, 0.9);
  }
`;

export const Left = styled.div`
  width: 600px;
  margin-left: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    width: 92px;
    height: 25px;
  }

  ul{
    
    li{
      font-size: 14px;
      margin-right: 30px;
      transition: all 0.2s;
      cursor: pointer;

      &:first-child{
        font-weight: bold;
      }

      &:hover{
        opacity: 0.8;
      }
    }
  }
`


export const Right = styled.ul`
  position: relative;
  width: 300px;
  margin-right: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  li{
    position: relative;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
  
    &:nth-child(4):after{
      content: "9+";
      position: absolute;
      top: -5px;
      left: 10px;
      height: 17px;
      width: 17px;
      background-color: #ac1230 !important;
      border-radius: 50%;
      font-size: 12px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  div.profile{
    background: url("https://occ-0-1306-1123.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaPolEEq5s2QRP_CDO2Y0XKN6lbRAkH-S-B5XcfR-7xdSV2k-1VPzx54xaySu7czNLu8U4t5Q8lhLZMzIBPgxcA.png?r=a41");
    background-size: cover;
    background-repeat: no-repeat; 
    border-radius: 10px;
    height: 35px;
    width: 35px;
    margin-right: 5px; 
    margin-left: -7px;
  }
`

export const Detail = styled.div`
  position: absolute;
  top: 50px;
  right: 0px;
  display: none;

  height: 300px;
  width: 150px;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.7);
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  svg{
    position: absolute;
    top: -10px;
    right: 20px;
  }

  h4{
      font-size: 12px;
      font-weight: 400;
      transition: all 0.2s;

      &:hover{
        text-decoration: underline;
      }
    }

  div.top{
    height: 180px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-left: 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    

    div.profile-detail{
    display: flex;
    align-items: center;

    h4{
      margin-left: 10px;
    }

    div.image{
    background: url("https://occ-0-1306-1123.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaPolEEq5s2QRP_CDO2Y0XKN6lbRAkH-S-B5XcfR-7xdSV2k-1VPzx54xaySu7czNLu8U4t5Q8lhLZMzIBPgxcA.png?r=a41");
    background-size: cover;
    background-repeat: no-repeat;
    height: 35px;
    width: 35px;
    border-radius: 10px;
    }
  } 
}
  div.bottom{
      padding-left: 15px;
    } 
`
