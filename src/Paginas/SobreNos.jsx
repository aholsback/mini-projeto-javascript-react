import CSS from "../Projeto/css/sobre-nos/sobre-nos.module.css";
import SobreNosImagem from "../Projeto/img/sobre-nos/sobre-nos-1.jpg";
import { Cabecalho } from "../Parciais/Cabecalho";
import { Rodape } from "../Parciais/Rodape";

export const SobreNos = () => {
   return (
      <div className="rolagem">
         <section className="paginas">
            <Cabecalho />

            <main>
               <section className={CSS.sobre}>
                  <div className={CSS.sobreNos}>
                     <h1 className="fonte-2"> Sobre nós </h1>

                     <div className={CSS.textoFoto}>
                        <div className={CSS.texto}>
                           <p>
                              Bem-vindo à Nome da Loja, o destino online perfeito para os amantes da moda contemporânea! Desde 2010, nossa missão é tornar a moda acessível a todos, oferecendo uma experiência de compra excepcional repleta de estilo, variedade e conveniência. Nossa equipe de especialistas em moda seleciona cuidadosamente uma coleção diversificada de roupas e acessórios que refletem as últimas tendências e valores de qualidade e design. Estamos comprometidos em proporcionar um atendimento ao cliente excepcional, valorizando cada interação e buscando exceder as expectativas. Além disso, nossa empresa prioriza a sustentabilidade e a responsabilidade, trabalhando com marcas que compartilham nossos valores. Junte-se a nós em nossa jornada de estilo e descubra um mundo de moda inspirador e autêntico na Nome da Loja!
                           </p>
                        </div>

                        <div className={CSS.foto}>
                           <img src={SobreNosImagem} alt="Imagem 1" />
                        </div>
                     </div>
                  </div>
               </section>
            </main>
         </section>

         <section className="paginas">
            <Rodape />
         </section>
      </div>
   );
}