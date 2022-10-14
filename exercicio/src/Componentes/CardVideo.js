import styled from "styled-components";

function CardVideo(props) {

  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }

  const DivEstilizada = styled.div `
    width: 100%;
    height: 200px;
  `;

  const H4Estilizada = styled.h4 `
    margin-left: 20px;
  `;

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <DivEstilizada>
      <img src={props.image1} alt={props.textoAlternativo} />
      <H4Estilizada>{props.titulo}</H4Estilizada>
      </DivEstilizada>
    </div>
  );
}

export default CardVideo;
