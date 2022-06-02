import React, { useState, useEffect } from 'react'
import Aluno from './Aluno';
import Pagination from 'react-bootstrap/Pagination'
import myaxios from './myaxios'
import Product from './Product';

const Alunos = () => {
    const [alunos, setalunos] = useState(null);

    const baixaAlunos = () => {
        myaxios.get(`/alunos`)
            .then(response => {
                setalunos(response.data.alunos);
            });
    }

    // A lista vazia marca que o que estiver dentro do useEffect vai executar quando a página acabar de montar
    useEffect(() => {
        baixaAlunos();
    }, [])

    return (
        <div>
            {alunos != null ? alunos.map(produto => (
                <Product description={produto.description} price={produto.price}
                    productImage={produto.productImage} />
            )) : "Nenhum aluno encontrado"}
            <Pagination>
                {items}
            </Pagination>
        </div>

    )
}

export default Alunos
