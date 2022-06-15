import React, {useState, useReducer, useEffect} from 'react'
import { useParams } from 'react-router'

const fnFormReducer = (state, action) => {
    switch(action.type){
      case "ATUALIZA":
        return {...state, [action.name]: action.value} 
        
      case "CARREGA":
        return action.state; 
        
      default:
        return state;
    }
}
const initialState = { nome: "", descricao: ""}

const ProdutoForm = () => {
    const [formState, dispatch] = useReducer(fnFormReducer, initialState)
    const {id} = useParams();
    const atualizaForm = (e) => {
      dispatch({
        type: "ATUALIZA",
        name: e.target.name,
        value: e.target.value
      })
    }

    useEffect(() => {
      if(id){
        fetch("http://localhost:38000/produto/"+id)
        .then(response => response.json())
        .then(data => dispatch({
          type: "CARREGA",
          state: data
        }))
      }
    }, [])

    const salvaOuAtualiza = (e) => {
      e.preventDefault();
      if(id){
        // ATUALIZADA
        fetch("http://localhost:38000/produto/"+id,{
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formState)
        }).then(r => r.json())
      } else {
        // CRIA
        fetch("http://localhost:38000/produto",{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formState)
        }).then(r => r.json())
      }
    }
    
    return (

        <div>
           <form>
               <div className="form-group">
                 <label for="nome">Nome</label>
                 <input type="text" className="form-control" name="nome" id="nome" aria-describedby="helpId" placeholder=""
                 value={formState.nome} onChange={atualizaForm} />
                 <small id="helpId" className="form-text text-muted">Insira o Nome</small>
               </div>
               <div className="form-group">
                 <label for="descricao">Preço</label>
                 <input type="text" className="form-control" name="descricao" id="descricao" aria-describedby="helpId" placeholder=""
                  value={formState.descricao} onChange={atualizaForm} />
                 <small id="helpId" className="form-text text-muted">Insira a descricao</small>
               </div>
               <div className="form-group">
                 <label for="descricao">Imagem</label>
                 <input type="file" className="form-control" name="imagem" id="imagem" aria-describedby="helpId" placeholder=""
                  value={formState.profileImage} onChange={atualizaForm} />
                 <small id="helpId" className="form-text text-muted">Insira a imagem</small>
               </div>
               <button onClick={salvaOuAtualiza}  type="button" className="btn btn-primary" btn-lg btn-block>Submeter</button>
            </form> 
        </div>
    )
}

export default ProdutoForm
