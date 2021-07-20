import React,{useEffect, useState} from "react";
import "./style.css";
import axios from 'axios';

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
          console.log('erro carai')
        }
        )
  }

  useEffect( () => {
    loadPersons()
  },[])



  return (
    <div>
      <h1> Whinderson </h1>
      {toPrint.map( (row, index) => (<h2 style={{color: row.eye_color}}> {row.name} </h2>))}
    </div>
  );
}