import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export const OffCanvasLista = (props) => {
   const precoFinal = () => {
      const total = props.array.reduce((soma, produto) => {
         const totalFinal = produto.preco * produto.quantidade;
         return (
            soma + totalFinal
         );
      }, 0)

      return total.toFixed(2).replace(".", ",");
   }

   return (
      <ListGroup className="text-center justify-content-center">
         <ListGroup.Item>
            <Row>
               <Col xs={6} className="d-flex justify-content-center">
                  <b>
                     PRODUTO
                  </b>
               </Col>

               <Col xs={2} className="d-flex justify-content-center">
                  <b>
                     QNT
                  </b>
               </Col>

               <Col xs={4} className="d-flex justify-content-center">
                  <b>
                     PREÇO
                  </b>
               </Col>
            </Row>
         </ListGroup.Item>

         {props.array.map((produto, index) => {
            return (
               <ListGroup.Item key={index}>
                  <Row>
                     <Col xs={2} className="d-flex align-items-center justify-content-center">
                        <img src={produto.img} width={30} height={30} className="rounded-pill" />
                     </Col>

                     <Col xs={4} className="d-flex align-items-center justify-content-center">
                        {produto.titulo}
                     </Col>

                     <Col xs={2} className="d-flex align-items-center justify-content-center">
                        {produto.quantidade}
                     </Col>

                     <Col xs={4} className="d-flex align-items-center justify-content-center">
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                     </Col>
                  </Row>
               </ListGroup.Item>
            );
         })}

         <ListGroup.Item>
            <Row>
               <Col xs={6} className="text-end">
                  <b>
                     TOTAL:
                  </b>
               </Col>

               <Col xs={6} className="text-start">
                  <b>
                     R$ {precoFinal()}
                  </b>
               </Col>
            </Row>
         </ListGroup.Item>

         <br />
         <Row>
            <Col>
               <Link className={props.botaoVariante} to="../carrinho">
                  {props.botaoTitulo}
               </Link>
            </Col>
         </Row>

      </ListGroup>
   );
}