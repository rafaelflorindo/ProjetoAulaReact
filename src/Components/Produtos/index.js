import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css'

import baseDados from "./baseProduto";

export default function Produto(){
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        setProdutos(baseDados);
    }, []);

    // Calcula o total geral
    const totalGeral = produtos.reduce((acc, item) => {
        return acc + (item.preco * item.quantidadeEstoque);
    }, 0);

    return(
        <div>
            <h1>Lista de Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>CÓDIGO</th>
                        <th>PRODUTO</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                        <th>ESTOQUE</th>
                        <th>TOTAL</th>
                        <th>AÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                {
                    produtos.map((item, index) => {
                        const totalLinha = item.preco * item.quantidadeEstoque;
                        return (
                            <tr key={index}>
                                <td>{item.codigo}</td>
                                <td>{item.nomeProduto}</td>
                                <td>{item.descricao}</td>
                                <td>R$ {item.preco.toFixed(2)}</td>
                                <td>{item.quantidadeEstoque}</td>
                                <td>R$ {totalLinha.toFixed(2)}</td>
                                <td>
                                    <Link to={`/listarProduto/${item.codigo}`}>Visualizar</Link>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
            
            <p className="numeroRegistros">Há {produtos.length} produtos cadastrados.</p>
            <p className="totalGeral">💰 Valor total em estoque: <strong>R$ {totalGeral.toFixed(2)}</strong></p>
        </div>
    );
}
