import Produto1 from '../Projeto/img/produtos/produto-1.jpg';
import Produto2 from '../Projeto/img/produtos/produto-2.jpeg';
import Produto3 from '../Projeto/img/produtos/produto-3.webp';
import Produto4 from '../Projeto/img/produtos/produto-4.jpg';
import Produto5 from '../Projeto/img/produtos/produto-5.webp';
import Produto6 from '../Projeto/img/produtos/produto-6.jpg';
import Produto7 from '../Projeto/img/produtos/produto-7.jpg';
import Produto8 from '../Projeto/img/produtos/produto-8.jpg';

export const Produtos = () => {
   return [
      {
         id: "001",
         titulo: "Jaqueta marrom",
         preco: 80,
         img: Produto1,
         quantidade: 0
      },

      {
         id: "002",
         titulo: "Camiseta masculina branca",
         preco: 60,
         img: Produto2,
         quantidade: 0
      },

      {
         id: "003",
         titulo: "Blusa de manga comprida",
         preco: 100,
         img: Produto3,
         quantidade: 0
      },

      {
         id: "004",
         titulo: "Camiseta azul",
         preco: 90,
         img: Produto4,
         quantidade: 0
      },

      {
         id: "005",
         titulo: "Camiseta branca",
         preco: 50,
         img: Produto5,
         quantidade: 0
      },

      {
         id: "006",
         titulo: "Jaqueta jeans",
         preco: 150,
         img: Produto6,
         quantidade: 0
      },

      {
         id: "007",
         titulo: "Moletom cinza",
         preco: 80,
         img: Produto7,
         quantidade: 0
      },

      {
         id: "008",
         titulo: "Moletom",
         preco: 50,
         img: Produto8,
         quantidade: 0
      }
   ];
}