import { IProduct } from '../../types/product'
import {Link} from "react-router-dom"
type ProductManagerProps = {

  products:IProduct[];
  onRemove:(id:number)=>void
}
const ProductManager = (props:ProductManagerProps) => {
  return (
    <div>
      <Link to={"/admin/products/add"}>Them moi</Link>
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Thao tac</th>
        </thead>
        <tbody>
          {props.products.map((item,index)=>{
            return (
              <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
              <Link to={`/admin/products/${item.id}/edit`}>Edit</Link>
                <button onClick={()=>props.onRemove(item.id)}>Remove</button>
              </td>
            </tr>
            )
           
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManager