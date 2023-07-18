import "../Projeto/css/rodape/rodape.css";
import "../Projeto/css/rodape/responsividade.css";
import Twitter from "../Projeto/img/redes-sociais/twitter.png";
import Instagram from "../Projeto/img/redes-sociais/instagram.png";
import Facebook from "../Projeto/img/redes-sociais/facebook.png";
import WhatsApp from "../Projeto/img/redes-sociais/whatsapp.png";

export const Rodape = () => {
   return (
      <footer>
         <div className="rodape">
            <div className="outras-paginas">
               <nav className="nav-rodape">
                  <ul className="lista-menu-rodape">
                     <li className="nav-item">
                        <a className="nav-link" href="#">
                           Termos de serviço
                        </a>
                     </li>

                     <li className="nav-item">
                        <a className="nav-link" href="#">
                           Política de devolução
                        </a>
                     </li>

                     <li className="nav-item">
                        <a className="nav-link" href="#">
                           Entrega e rastreamento
                        </a>
                     </li>

                     <li className="nav-item">
                        <a className="nav-link" href="#">
                           Ajuda e FAQ
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>

            <div className="informacoes-loja">
               <h3> Endereço e telefone </h3>

               <div className="endereco-telefone">
                  <h6> Rua X, número 0000, Cidade - UF, 000-000 </h6>
                  <h6> (00) 3300-0000 </h6>
               </div>
            </div>

            <div className="redes-sociais">
               <h3> Redes sociais </h3>

               <div className="grupo-redes">
                  <a className="redes-link" href="#">
                     <img className="img-redes-sociais" src={Twitter} alt="Twitter" />
                  </a>

                  <a className="redes-link" href="#">
                     <img className="img-redes-sociais" src={Instagram} alt="Instagram" />
                  </a>

                  <a className="redes-link" href="#">
                     <img className="img-redes-sociais" src={Facebook} alt="Facebook" />
                  </a>

                  <a className="redes-link" href="#">
                     <img className="img-redes-sociais" src={WhatsApp} alt="WhatApp" />
                  </a>
               </div>
            </div>

            <div className="direitos-autorais">
               <h6> Todos os direitos reservados a &copy Nome Loja. </h6>
               <h6> Site desenvolvido por Ana Holsback. </h6>
            </div>
         </div>
      </footer>
   );
}