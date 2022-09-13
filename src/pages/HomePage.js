import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

export default function HomePage() {
  const [cake, setCake] = useState(false);
  return (
    <Container>
      {cake ? (<>
       {/* testando um layout novo */}
       <div>
        <h1>Parabens minha <strong>Linda</strong> ❤️, com toda certeza o seu desejo irá se realizar, estamos torcendo por você...</h1>
        <br />
        <br />
        <h1>
          Sua familia tem muito orgulho da mulher que vc se tornou, este ano você avançou muito nos seus projetos, e cada dia que passa conseguimos notar que vc está evoluindo.
        </h1>
        <br />
        <h1>Obrigado por estar presente em nossas vidas, não podemos imaginar viver sem vc.</h1>
        <br />
        <h1>Você é sempre será a <strong>Princesa</strong>👸🏽 da nossa familia.</h1>
        <br />
        <h1> Foi feito com muito amor e carinho por <strong>todos:</strong></h1>
        <br />
        <br />
        
        <h3>Ass: Pedro H, Luiz, Gustavo, Gustavo Dois, Guilherme, Arthur 💙, Gisele Daiana, Kathllen. </h3>
       
        <br />
        <br />
        <h1>Feliz Aniversário, <strong>nunca esqueça o quanto te amamos</strong> 🎉</h1>
        {/* <img
          src="https://www.funimada.com/assets/images/cards/big/1st-birthday-64.gif"
          alt="Bolo acesso"
        /> */}
        <Player
          className="coraconzin"
          autoplay
          speed="1.2"
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_b6cz19m8.json"
          style={{ height: "100%", width: "100%" }}
        ></Player>

       

      </div>
      </>
      ) : (
        <div>
          <h1>Oi <strong>Pamela</strong>, gostariamos de falar algumas palavras, mas antes:</h1>
          <br />
          <br />
          <br />
          <h1>
            1) Faça um <strong>pedido</strong>...
          </h1>
          <br />
          <h1>2) Apague a sua vela...</h1>
          <img
            className="bolao"
            src="https://www.funimada.com/assets/images/cards/big/1st-birthday-64.gif"
            alt="Bolo acesso"
          />

          <button onClick={() => setCake(!cake)}>APAGAR SUA VELA</button>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-family: "Montserrat";
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #ffffff;

    z-index: 2;
  }
  h3 {
    font-family: childWriting;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;

    z-index: 2;
  }
  .coraconzin {
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
  }
  .bolao{
    width: 80%;
    max-height: 320px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    margin-top: 30px;
  }
  button {
    z-index: 1;
    min-width: 95%;
    min-height: 70px;
    border-radius: 10px;
    margin-top: 0px;

    background: linear-gradient(
      90deg,
      rgba(255, 0, 186, 1) 0%,
      rgba(255, 0, 247, 1) 100%
    );
    border: 1px solid black;
    animation: animate 2s linear infinite;

    font-family: "Montserrat";
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #ffffff;
    font-size: 14px;

    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 40px rgba(255, 0, 247, 1);
    }
  }
  @keyframes animate {
    0% {
      box-shadow: 0px 0px 40px rgba(48, 222, 255, 0);
    }
    50% {
      box-shadow: 0px 0px 40px rgba(255, 0, 247, 1);
      font-size: 18px;
    }
    100% {
      box-shadow: 0px 0px 40px rgba(48, 222, 255, 0);
    }
  }

  strong {
    font-weight: 700;
  }
  img {
    z-index: 0;
    margin-bottom: -15px;
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

  span {
    font-weight: 200;
    color: #ffffff;
  }
`;
