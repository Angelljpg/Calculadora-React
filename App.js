import React, { useState } from 'react';
import './App.css';

function App() {
  const [resultado, mostrarResultado] = useState('');

  function clickHandler(event) {
    const valor = event.target.name;
    mostrarResultado(resultado + valor);
  }

  function calcular() {
    try {
      const resultadoCalculado = eval(resultado).toString();
      mostrarResultado(resultadoCalculado);
    } catch (error) {
      mostrarResultado('Error');
    }
  }

  function borrar() {
    mostrarResultado('');
  }

  function calcularPotencia() {
    mostrarResultado(resultado.concat('^'));
  }

  function calcularRaiz() {
    mostrarResultado(`Math.sqrt(${resultado})`);
  }

  function calcularResiduo() {
    mostrarResultado(resultado.concat('%'));
  }

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <div className="display">
        <input type="text" value={resultado} readOnly />
      </div>
      <div className="keypad">
        <button className="btn btn-light" name="7" onClick={clickHandler}>
          7
        </button>
        <button className="btn btn-light" name="8" onClick={clickHandler}>
          8
        </button>
        <button className="btn btn-light" name="9" onClick={clickHandler}>
          9
        </button>
        <button className="btn btn-info" name="/" onClick={clickHandler}>
          /
        </button>
        <button className="btn btn-light" name="4" onClick={clickHandler}>
          4
        </button>
        <button className="btn btn-light" name="5" onClick={clickHandler}>
          5
        </button>
        <button className="btn btn-light" name="6" onClick={clickHandler}>
          6
        </button>
        <button className="btn btn-info" name="*" onClick={clickHandler}>
          *
        </button>
        <button className="btn btn-light" name="1" onClick={clickHandler}>
          1
        </button>
        <button className="btn btn-light" name="2" onClick={clickHandler}>
          2
        </button>
        <button className="btn btn-light" name="3" onClick={clickHandler}>
          3
        </button>
        <button className="btn btn-info" name="-" onClick={clickHandler}>
          -
        </button>
        <button className="btn btn-light" name="0" onClick={clickHandler}>
          0
        </button>
        <button className="btn btn-light" name="." onClick={clickHandler}>
          .
        </button>
        <button className="btn btn-success" onClick={calcular}>
          =
        </button>
        <button className="btn btn-info" name="+" onClick={clickHandler}>
          +
        </button>
        <button className="btn btn-info" onClick={calcularPotencia}>
          ^
        </button>
        <button className="btn btn-info" onClick={calcularRaiz}>
          √
        </button>
        <button className="btn btn-info" onClick={calcularResiduo}>
          %
        </button>
        <button className="btn btn-danger" onClick={borrar}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default App;
