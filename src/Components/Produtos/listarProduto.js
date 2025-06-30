import { useState, useEffect } from "react";
import baseDados from "./baseProduto";
import { useParams } from "react-router-dom";

function ListarProduto() {
    const [produtos, setProdutos] = useState([]);
    const { codigo } = useParams(); 
   
    const id = Number(codigo); 

    const buscarProduto = () => {

        const produtoFiltrado = baseDados.filter((produto) => produto.id === id);

        console.log("ProdutoFiltrado: "+ produtoFiltrado);
        setProdutos(produtoFiltrado);
  };

  useEffect(() => {
    buscarProduto();
  }, []);

  return (
    
    <div>
      <h1>Produto(s) com id: {produtos.id}</h1>
      {produtos.length === 0 ? 
        <p>Nenhum produto encontrado.</p>
       : <p>Nome: {produtos.nome}</p>
      }
    </div>
  );
}

export default ListarProduto;
