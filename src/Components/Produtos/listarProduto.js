import { useState, useEffect } from "react";
import baseDados from "./baseProduto";

function listarProduto({route}){
    const [produtos, setProdutos] = useState([]);
    const id = route.id

    console.log(id);

    useEffect(() => { //evitar o looping infinito
        setProdutos(baseDados);
    }, []);

    return(
        <>Listar Produto Selecionado
        </>
    )
}

export default listarProduto