import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css"
import type { IProduct } from './types/product'
import { add, list, remove, update } from './api/product'
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/layouts/ProductManager';
import ProductAdd from './pages/layouts/ProductAdd';
import ProductEdit from './pages/layouts/ProductEdit';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  const removeItem = (id: number) => {
    // call api
    remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandlerAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product:IProduct)=>{
    const{data} = await update(product);
    setProducts(products.map(item=>item.id == data.id? data:item));
  }
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<h1>Hien thi san pham</h1>} />
            <Route path="about" element={<h1>About page</h1>} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products"  >
              <Route index element={<ProductManager products={products} onRemove={removeItem} />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
              <Route path="add" element={<ProductAdd name="Dat" onAdd={onHandlerAdd} />} />
            </Route>
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
