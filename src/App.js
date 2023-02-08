import './App.css';
import { useState } from 'react';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [msg, setMsg] = useState('');

  function calculaIMC(){
    const alt = altura / 100
    const imc = peso / (alt * alt)
    const imcResult = imc.toFixed(2)

    if(imcResult < 18.6){
      setMsg(`Você está abaixo do peso! Seu IMC: ${imcResult}`)
    }else if(imcResult >= 18.6 && imcResult < 24.9){
      setMsg(`Peso ideal! Seu IMC:  ${imcResult}`)
    }else if(imcResult >= 24.9 && imcResult < 34.9){
      setMsg(`Você está levemente acima do peso! Seu IMC:  ${imcResult}`)
    }else{
      setMsg(`Cuidado obesidade! Seu IMC:  ${imcResult}`)
    }
  }
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC:</span>

      <div className="area-input">
      <input type="text" 
      placeholder="Peso em kg (Ex: 90)"
      value={peso} 
      onChange={(evento) => setPeso(evento.target.value)}> 
      {/* OnChange: Evento disparado quando é digitado algo no input. Para passar um novo valor setPeso() e dentro dele e.target.value pega o valor digitado no inut*/}
      </input>
      <input type="text" 
      placeholder="Altura em cm (Ex: 180)"
      value={altura}
      onChange={(evento) => setAltura(evento.target.value)}></input>

      <button onClick={calculaIMC}>Calcular</button>
    </div>
      <h2>{msg}</h2>
    </div>
    
  )
}
