export const getProdutos = async () => {
   return (
      JSON.parse (localStorage.getItem ("produtos-carrinho")) || []
   );
}

const transformarString = (produtos) => {
   localStorage.setItem ("produtos-carrinho", JSON.stringify (produtos));
}

export const addCarrinho = async (produto) => {
   const produtos = await getProdutos ();
   const produtoExistente = produtos.find ((item) => item.id === produto.id);

   if (produtoExistente) {
      produtoExistente.quantidade++;
   } else {
      produto.quantidade = 1;
      produtos.push (produto);
   }

   transformarString (produtos);

   return (produtos);
}

export const removerCarrinho = async (produto) => {
   const produtos = await getProdutos ();
   const buscarProduto = produtos.find ((item) => item.id === produto.id);

   if (buscarProduto) {
      buscarProduto.quantidade--;

      if (buscarProduto.quantidade <= 0) {
         const indexProduto = produtos.findIndex ((item) => item.id === produto.id);
         produtos.splice (indexProduto, 1);
      }
   }

   transformarString (produtos);

   return (produtos);
}