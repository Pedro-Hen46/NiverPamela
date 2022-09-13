import styled from "styled-components";

export default function HomePage() {

  return (
    <Container>
      <img src="./teste.png" />
      <div>
        <button>CLIQUE AQUI</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 2rem;

  
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    
    margin-top: 30px;
    img{
      margin-bottom: -2px;
      width: 100%;
      height: 150px !important;
      object-fit: contain !important;
    }
  }
  button {
    min-width: 95%;
    min-height: 70px;
    border-radius: 10px;

    // background: linear-gradient(
    //   90deg,
    //   rgba(2, 0, 36, 1) 0%,
    //   rgba(9, 9, 121, 1) 0%,
    //   rgba(0, 212, 255, 1) 100%
    // );
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 0%, rgba(255,0,0,1) 100%);

    border: 1px solid black;
    animation: animate 2s linear infinite;

    font-family: "Montserrat";
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #ffffff;
    font-size: 14px;

    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 40px rgba(255,0,0,1);
    }
  }
  @keyframes animate {
    0% {
      box-shadow: 0px 0px 40px rgba(48, 222, 255, 0);
    }
    50% {
      box-shadow: 0px 0px 40px rgba(255,0,0,1);
      font-size: 16px;
    }
    100% {
      box-shadow: 0px 0px 40px rgba(48, 222, 255, 0);
    }
  }

  strong {
    font-weight: 700;
  }
  img {
    :first-child {
      width: 100%;
      height: 100px;
      object-fit: contain;
    }
    object-fit: contain;
    :hover {
      cursor: pointer;
    }
  }
  span {
    font-family: childWriting;
    text-align: center;
    font-size: 22px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  h4 {
    font-family: "Montserrat";
    font-size: 22px;
    text-align: center;
    color: white;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  h6 {
    font-family: "Montserrat";
    font-weight: 300;
    font-style: italic;
    text-decoration: overline;
    color: white;
  }
  h1 {
    font-family: bossBaby;
    font-size: 36px;
    font-weight: bold;
    color: #ffffff;
  }
  span {
    font-weight: 200;
    color: #ffffff;
  }
`;
