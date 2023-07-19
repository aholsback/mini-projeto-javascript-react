import Offcanvas from "react-bootstrap/Offcanvas";

export const ComponenteOffCanvas = (props) => {
   return (
      <Offcanvas show={props.abrir} onHide={props.fechar} placement={props.posicao}>
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>
               {props.titulo}
            </Offcanvas.Title>
         </Offcanvas.Header>

         <Offcanvas.Body>
            {props.corpo}
         </Offcanvas.Body>
      </Offcanvas>
   );
}