import { useState } from "react";
import './index.css'

export default function Produto(){
    const [produtos, setProdutos] = useState(
        [
            {
                codigo: 12, 
                nomeProduto: 'Café', 
                descricao: 'Melita - 500g a vacuo', 
                preco: 34.98, quantidadeEstoque: 15

            },
            {   codigo: 15, nomeProduto: 'Coca-Cola',
                descricao: '2l - Embalagem retornavel',
                preco: 7.99, quantidadeEstoque: 15 
            },
            {   codigo: 18, nomeProduto: 'Bolacha de Mel',
                descricao: 'Pacote 500g',
                preco: 17.99, quantidadeEstoque: 10 
            }
            ,
            {   codigo: 35, nomeProduto: 'Requeijão',
                descricao: 'Pote de 500g',
                preco: 14.99, quantidadeEstoque: 8 
            }
        ]
    );
    return(
        <div>
            <h1>Lista de Produtos</h1>
            <table>
                <th>CÓDIGO</th>
                <th>PRODUTO</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>ESTOQUE</th>
                {
                    produtos.map(
                        (item, index)=>(
                            <tr key={index}>
                                <td>{item.codigo}</td>
                                <td>{item.nomeProduto}</td>
                                <td>{item.descricao}</td>
                                <td>{item.preco}</td>
                                <td>{item.quantidadeEstoque}</td>
                            </tr>
                        )
                    )
                }
            </table>
            <p className="numeroRegistros">Há {produtos.length} produtos cadastrados.</p>
        </div>
    );
}

