import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Showinfo from './components/ShowInfo'

function App() {
  // const products = [
  //   { id: 1, name: "ProductA", price: 20 },
  //   { id: 2, name: "ProductB", price: 30 },
  //   { id: 3, name: "ProductC", price: 40 },
  // ]

  // const [products, setProducts] = useState([
  //   { id: 1, name: "ProductA", price: 20 },
  //   { id: 2, name: "ProductB", price: 30 },
  //   { id: 3, name: "ProductC", price: 401 },
  // ])
  const [status,setStatus] =useState(false)
const [products,setProducts] = useState([
  { id: 1, name: "ProductA", price: 20 },
    { id: 2, name: "ProductB", price: 30 },
    { id: 3, name: "ProductC", price: 401 },
])
  return (
    <div className="App">
      <button onClick={()=>setStatus(!status)}>Toggled</button>
      <hr />
      {status ? products.map((item, index) =>
        <div key={index}>
          <ul >
            <li>{item.name}</li>
            <li>{item.price}</li>
          </ul>
        </div>):""}
      <Showinfo name="Duy" />
      <Showinfo name="Quyet" />
    </div>
  )
}

export default App
