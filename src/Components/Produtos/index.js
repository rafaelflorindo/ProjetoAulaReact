import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css'

import baseDados from "./baseProduto";

export default function Produto(){
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => { //evitar o looping infinito
        setProdutos(baseDados);
    }, []);

    return(
        <div>
            <h1>Lista de Produtos</h1>
            <table>
                <th>CÓDIGO</th>
                <th>PRODUTO</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>ESTOQUE</th>
                <th>AÇÃO</th>
                {
                    produtos.map(
                        (item, index)=>(
                            <tr key={index}>
                                <td>{item.codigo}</td>
                                <td>{item.nomeProduto}</td>
                                <td>{item.descricao}</td>
                                <td>{item.preco}</td>
                                <td>{item.quantidadeEstoque}</td>
                                <td>
                                    <Link onClick='navigate(listarProdutos.js)'>Visualizar</Link>
                                </td>
                            </tr>
                        )
                    )
                }
            </table>
            <p className="numeroRegistros">Há {produtos.length} produtos cadastrados.</p>
        </div>
    );
}

