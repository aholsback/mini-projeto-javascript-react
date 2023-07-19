import Button from 'react-bootstrap/Button';

export const Botao = ({ titulo, variante, aoClicar }) => {
   return (
      <Button variant={variante} onClick={aoClicar}>
         {titulo}
      </Button>
   );
}