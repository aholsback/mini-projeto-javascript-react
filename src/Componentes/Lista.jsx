import CSS from "../Projeto/css/carrinho/carrinho.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAppContext } from "../AppContext/AppContext";
import { getProdutos } from "../Service/Service";
import { addCarrinho } from "../Service/Service";
import { removerCarrinho } from "../Service/Service";

export const Lista = (props) => {
   const { itensCarrinho, setItensCarrinho } = useAppContext();

   const add = async (produto) => {
      await addCarrinho(produto);
      setItensCarrinho(
         await getProdutos()
      );
   }

   const remove = async (produto) => {
      await removerCarrinho(produto);
      setItensCarrinho(
         await getProdutos()
      );
   }

   const totais = (preco, quantidade) => {
      return (
         (preco * quantidade).toFixed(2).replace(".", ",")
      );
   }

   const precoFinal = () => {
      const total = itensCarrinho.reduce((soma, produto) => {
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
               <Col xs={5} className="d-flex justify-content-center">
                  <p className={CSS.titulos}>
                     PRODUTO
                  </p>
               </Col>

               <Col xs={3} className="d-flex justify-content-center">
                  <p className={CSS.titulos}>
                     QUANTIDADE
                  </p>
               </Col>

               <Col xs={2} className="d-flex justify-content-center">
                  <p className={CSS.titulos}>
                     PREÇO UNITÁRIO
                  </p>
               </Col>

               <Col xs={2} className="d-flex justify-content-center">
                  <p className={CSS.titulos}>
                     TOTAIS
                  </p>
               </Col>
            </Row>
         </ListGroup.Item>

         {itensCarrinho.map((produto, index) => {
            return (
               <ListGroup.Item key={index} className={CSS.titulo}>
                  <Row>
                     <Col xs={2} className="d-flex align-items-center justify-content-center">
                        <img src={produto.img} width={100} height={100} className={CSS.fotoProduto} />
                     </Col>

                     <Col xs={3} className="d-flex align-items-center justify-content-center">
                        <p className={CSS.textos}>
                           {produto.titulo}
                        </p>
                     </Col>

                     <Col xs={3} className="d-flex align-items-center justify-content-center">
                        <button className={CSS.simbolos} onClick={() => remove (produto)}>
                           <span className="material-symbols-outlined"> remove </span>
                        </button>

                        <p className={CSS.textos}>
                           {produto.quantidade}
                        </p>

                        <button className={CSS.simbolos} onClick={() => add (produto)}>
                           <span className="material-symbols-outlined"> add </span>
                        </button>
                     </Col>

                     <Col xs={2} className="d-flex align-items-center justify-content-center">
                        <p className={CSS.textos}>
                           R$ {produto.preco.toFixed(2).replace(".", ",")}
                        </p>
                     </Col>

                     <Col xs={2} className="d-flex align-items-center justify-content-center">
                        <p className={CSS.textos}>
                           R$ {totais(produto.preco, produto.quantidade)}
                        </p>
                     </Col>
                  </Row>
               </ListGroup.Item>
            );
         })}

         <ListGroup.Item>
            <Row>
               <Col xs={6}>
                  <p className={CSS.textoTitulos}>
                     TOTAL:
                  </p>
               </Col>

               <Col xs={6} className="text-start">
                  <p className={CSS.precoFinal}>
                     R$ {precoFinal()}
                  </p>
               </Col>
            </Row>
         </ListGroup.Item>

         <br />
         <Row>
            <Col>
               <button className={CSS.botao} type="button" onClick={props.aoClicar}>
                  {props.botaoTitulo}
               </button>
            </Col>
         </Row>

      </ListGroup>
   );
}