import { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export const Botao = ({ titulo, variante, funcao, tituloCarregando, varianteCarregando }) => {
   const [ carregando, setCarregando ] = useState (false);

   const clicar = async (chamarFuncao) => {
      setCarregando (true);

      await chamarFuncao ();

      setTimeout (() => {
         setCarregando (false);
      }, 1000);
   }

   return (
      <Button variant={carregando ? varianteCarregando : variante} onClick={() => clicar (funcao)}>
         {carregando &&
            <Spinner
               as="span"
               animation="border"
               size="sm"
               role="status"
               aria-hidden="true"
            />
         } {carregando ? tituloCarregando : titulo}
      </Button>
   );
}