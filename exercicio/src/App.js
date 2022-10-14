import React from "react";
import CardVideo from "./Componentes/CardVideo";
import styled from 'styled-components'
import {GlobalStyle} from './GlobalStyle'


export default function App() {

  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };


  const HeaderEstilizada = styled.header `
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10%;
  `;

  const MainEstilizada = styled.main `
    min-height: 80%;
    display: flex;
  `;

  const NavEstilizada = styled.nav `
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
  `;

  const SectionEstilizada = styled.section `
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
  `;

  const FooterEstilizada = styled.footer `
    background: #333b3e;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0 10px;
  `;


  return (
    <div>
      <div className="tela-inteira">
        <GlobalStyle/>
        <header>
        <HeaderEstilizada>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </HeaderEstilizada>
        </header>

        <main>
          <MainEstilizada>
          <nav className="menu-vertical">
            <NavEstilizada>
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
            </NavEstilizada>
          </nav>

          <section className="painel-de-videos">
            <SectionEstilizada>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
            </SectionEstilizada>
          </section>
          </MainEstilizada>
        </main>

        <footer>
          <FooterEstilizada>
          <h4>Oi! Eu moro no footer!</h4>
          </FooterEstilizada>
        </footer>
      </div>
    </div>
  );
}
