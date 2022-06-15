import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Produtos = () => {
    const [produtos, setprodutos] = useState(null)  // lista de produtos para mostrar na tabela
    const baixaProdutos = () => {
        fetch("http://localhost:38000/produto") 
        .then(r => r.json()) 
        .then(data => setprodutos(data) ) 
    }

    useEffect(() => {
        baixaProdutos();
    }, [])

    const apagaProdutos = (id) => {
        fetch("http://localhost:38000/produto/"+id, {method: "DELETE"})
        .then(response => baixaProdutos())
    }

    return (
        
        <div>
            {produtos != null ? 
                    produtos.map(produto =>
                        
                        <div className="card text-left" key={produto.id}>
                        <img className="card-img-top" src="" alt="" />
                        <div className="card-body">
                          <h4 className="card-title">Nome: {produto.nome}</h4>
                          <p className="card-text">Preco: {produto.descricao}</p>
                          <img style={{width: 150}} className="card-img-top" src={"http://localhost:380000/images/" + produto.profileImage}  alt="Card image cap"/>
                        </div>
                        <footer>
                            <p> <Link to={"/form/"+produto.id}> <i className="fa fa-pencil" aria-hidden="true"></i> </Link></p>
                            <p style={{cursor: "pointer"}} onClick={() => apagaProdutos(produto.id)} ><i className="fa fa-eraser" aria-hidden="true"></i></p>
                        </footer>
                      </div>)
                    : null }
        </div>
    )
}

export default Produtos
