import { useReducer, useState } from 'react';

/* Ao meu ver o useReducer x useState é mais por uma questão organizacional do que de performace */

export function WithoutReducer() {

  const [valor, setValor] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [ultimaOpExecutada, setUltimaOpExecutada] = useState(0)

  return (
    <div className="App">
      <button onClick={() => {
        setValor(valor + 10)
        setClicks(clicks + 1)
        setUltimaOpExecutada('soma')
      }}>Adiciona 10</button>
      <button onClick={() => {
        setValor(valor - 10)
        setClicks(clicks + 1)
        setUltimaOpExecutada('subtracao')
      }}>Tira 10</button>
      <button onClick={() => {
        setValor(valor / 2)
        setClicks(clicks + 1)
        setUltimaOpExecutada('divisao')
      }}>Divide por 2</button>
      <button onClick={() => {
        setValor(valor * 2)
        setClicks(clicks + 1)
        setUltimaOpExecutada('multiplicacao')
      }}>Multiplica por 2</button>
      {valor}-{clicks}-{ultimaOpExecutada}
    </div>
  );
}

export function WithReducer() {

    const initialState = {count: 0, clicks: 0, ultimaOpExecutada: ''};
  
    const reducer = (state, action) => {
      switch (action.operacao) {
        case '+':
          return {count: state.count + action.valor, clicks: state.clicks + 1, ultimaOpExecutada: 'soma'};
        case '-':
          return {count: state.count - action.valor, clicks: state.clicks + 1, ultimaOpExecutada: 'subtracao'};
        case '/':
          return {count: state.count / action.valor, clicks: state.clicks + 1, ultimaOpExecutada: 'divisao'};
        case '*':
          return {count: state.count * action.valor, clicks: state.clicks + 1, ultimaOpExecutada: 'multiplicacao'};
        default:
          throw new Error();
      }
    }
  
    const [valor, valorDispatch] = useReducer(reducer, initialState)
  
    return (
      <div className="App">
        <button onClick={() => {
          valorDispatch({valor: 10, operacao: '+'})
        }}>Adiciona 10</button>
        <button onClick={() => {
          valorDispatch({valor: 10, operacao: '-'})
        }}>Tira 10</button>
        <button onClick={() => {
          valorDispatch({valor: 2, operacao: '/'})
        }}>Divide por 2</button>
        <button onClick={() => {
          valorDispatch({valor: 2, operacao: '*'})
        }}>Multiplica por 2</button>
        {valor.count}-{valor.clicks}-{valor.ultimaOpExecutada}
      </div>
    );
  }