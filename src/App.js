import React,{useEffect, useState} from "react";
import "./style.css";
import axios from 'axios';
import Personagem from './components/Personagem'

export default function App() {
  var [toPrint, setToPrint] = useState([])

  function loadPersons(){
      axios.get('https://swapi.dev/api/people/').then(
        resp => {
          let res = resp.data.results
          console.log(res)
          setToPrint(res)
        },
        error => {
          console.log('erro')
        }
        )
  }

  function removeList(id){
    let newArr = []
    toPrint.forEach( (row, index) => {
      id!==index&&newArr.push(row)
    })
    setToPrint(newArr)
  }

  useEffect( () => {
    loadPersons()
  },[])



  return (
    <div className={'container'}>
      <h1> Listando: {toPrint.length} <button onClick={()=>loadPersons()} style={{backgroundColor: 'green',marginLeft: 10, marginTop: 5  }}> Retornar </button> </h1>
      
      <Personagem dados={toPrint} functionClick={removeList} />
      
    </div>
  );
}