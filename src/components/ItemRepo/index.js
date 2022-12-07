import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (  
    <ItemContainer id={repo.id}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank">Ver Repositório</a>
      <a href="#" onClick={handleRemove} className='remover'>Remover</a>
      <hr/>
    </ItemContainer>
  )
}

export default ItemRepo;