import React from 'react'


const Personagem = props => {

  const {dados, functionClick} = props || []


  return (
    <ul>
    {dados.map( (row, index) => (
    
      <li style={{color: row.eye_color}} key={index}> {row.name} <button onClick={() => functionClick(index)}> Remover </button></li>
        
    ))}
    </ul>
    )
}

export default Personagem