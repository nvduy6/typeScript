import { useState,useEffect } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css"
import type { IProduct } from './types/product'
import Product from './components/Product'
import ShowInfo from './components/ShowInfo'
import { list, remove } from './api/product'
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/layouts/ProductManager';

function App() {
  const [count, setCount] = useState(0)
const [products,setProducts]=useState<IProduct[]>([]);
useEffect(()=>{
  const getProducts = async ()=>{
    const {data} = await list();
    setProducts(data);
  }
  getProducts();
},[])
const removeItem = (id:number)=>{
  // call api
  remove(id);
  // reRender
  setProducts(products.filter(item=>item._id!==id));
}
  return (
    <div className="App">
       {products.map((item,index) => {
        return  <div key={index}>{item.name}<button onClick={()=>removeItem(item._id)}>Remove</button></div>
      })}
      <header>
        <ul>
          <li>
          <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
          <NavLink to="/product">Product Page</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route  path='/' element={<WebsiteLayout/>}>
<Route index element={<Home/>}/>
<Route path="product" element={<h1>Hien thi san pham</h1>} />
              <Route path="about" element={<h1>About page</h1>} />
          </Route>

          <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<ProductManager />} />
          </Route>
{/* <Route path='/' element={<h1>Home Page</h1>}/>
<Route path='product' element={products.map((item,index)=><div key={index}>{item.name}</div>)}/>
<Route path='about' element={<ShowInfo name="abc" age={10}/>}/> */}

        </Routes>
      </main>
    </div>
  )
}

export default App
