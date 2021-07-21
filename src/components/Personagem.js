import React from 'react'


const Personagem = props => {

  const {dados, functionClick} = props || []


  return (
    <ul>
    {dados.map( (row, index) => (
    
      <li className={'flex-container space-between'} style={{color: row.eye_color}} key={index}><span> {row.name} </span> <button onClick={() => functionClick(index)}> Remover </button></li>
        
    ))}
    </ul>
    )
}

export default Personagem