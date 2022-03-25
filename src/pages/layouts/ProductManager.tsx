import { IProduct } from '../../types/product';
import {Link} from "react-router-dom";
import { Table, Tag, Space } from 'antd';
type ProductManagerProps = {

  products:IProduct[];
  onRemove:(id:number)=>void
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Thao tac ',
    dataIndex: 'Thao tac',
    key: 'Thao tac',
  },

]
const ProductManager = (props:ProductManagerProps) => {
  const dataSource = props.products.map((item, index) => {
    return {
      key: index + 1,
      name: item.name,
      price: item.price
    }
  })
  return (
    <Table columns={columns} dataSource={dataSource} />
  )
}

export default ProductManager