import { useState } from "react";
import "../Projeto/css/cabecalho/cabecalho.css";
import "../Projeto/css/cabecalho/responsividade.css";
import Logotipo from "../Projeto/img/logotipo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext/AppContext";
import { ComponenteOffCanvas } from "../Componentes/OffCanvas";
import { OffCanvasLista } from "../Componentes/OffCanvasLista";

export const Cabecalho = () => {
   const { itensCarrinho, setItensCarrinho } = useAppContext ();

   const [offCanvas, setOffCanvas] = useState (false);

   const abrirOffCanvas = () => {
      setOffCanvas (true);
   }

   const fecharOffCanvas = () => {
      setOffCanvas (false);
   }

   const pagina = useNavigate ();

   return (
      <div className="cabecalho">
         <header>
            <div className="conteudo-cabecalho">
               <div className="area-usuario">
                  <button className="login fonte-2" type="button">
                     <span className="material-symbols-outlined">
                        person
                     </span>
                     Entrar
                  </button>

                  <button className="carrinho fonte-2" type="button" onClick={abrirOffCanvas}>
                     <span className="material-symbols-outlined">
                        shopping_cart
                     </span>
                     Carrinho ({itensCarrinho.length})
                  </button>

                  <ComponenteOffCanvas
                     abrir={offCanvas}
                     fechar={fecharOffCanvas}
                     posicao="end"
                     titulo="Carrinho"
                     corpo={itensCarrinho.length === 0 ?
                        "Carrinho vazio." :
                        <OffCanvasLista
                           array={itensCarrinho}
                           botaoTitulo="Ir para o carrinho"
                           botaoVariante="outline-success"
                           aoClicar={() => {
                              pagina ("/carrinho");
                           }}
                        />}
                  />
               </div>

               <Navbar className="nav-menu" expand="lg">
                  <Container fluid className="conteudo-menu d-flex">
                     <Navbar.Brand>
                        <img
                           src={Logotipo}
                           className="logotipo d-inline-block align-top"
                           alt="Logotipo"
                        />
                     </Navbar.Brand>

                     <Navbar.Toggle aria-controls="basic-navbar-nav" />

                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="lista-menu me-auto mb-lg-0">
                           <Link className="nav-link" to="/">
                              Página inicial
                           </Link>

                           <Link className="nav-link" to="loja">
                              Loja
                           </Link>

                           <Link className="nav-link" to="sobre-nos">
                              Sobre nós
                           </Link>

                           <Link className="nav-link" to="equipe">
                              Equipe
                           </Link>

                           <Link className="nav-link" to="contato">
                              Contato
                           </Link>
                        </Nav>

                        <div className="pesquisar rounded-pill">
                           <form className="d-flex" role="search">
                              <input
                                 className="form-control me-2 border-0 rounded-pill bg-transparent"
                                 type="search"
                                 placeholder=""
                                 aria-label="Search"
                              />

                                 <button
                                    className="btn rounded-pill d-flex justify-content-center align-items-center"
                                    type="submit"
                                 >
                                    <span className="material-symbols-outlined">
                                       search
                                    </span>
                                 </button>
                           </form>
                        </div>
                     </Navbar.Collapse>
                  </Container>
               </Navbar>
            </div>
         </header>
      </div>
   );
}