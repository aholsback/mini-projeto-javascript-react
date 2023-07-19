import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Botao } from "./Botao";

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
               <Col xs={6}>
                  <b>
                     PRODUTO
                  </b>
               </Col>

               <Col xs={2}>
                  <b>
                     QNT
                  </b>
               </Col>

               <Col xs={4}>
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
                     <Col xs={2}>
                        <img src={produto.img} width={30} height={30} className="rounded-pill" />
                     </Col>

                     <Col xs={4}>
                        {produto.titulo}
                     </Col>

                     <Col xs={2}>
                        {produto.quantidade}
                     </Col>

                     <Col xs={4}>
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
               <Botao titulo={props.botaoTitulo} variante={props.botaoVariante} aoClicar={props.aoClicar} />
            </Col>
         </Row>

      </ListGroup>
   );
}