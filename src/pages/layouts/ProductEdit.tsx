import React, { useEffect } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form';
import {useNavigate,useParams} from 'react-router-dom';
import { read } from '../../api/product';
import { IProduct } from '../../types/product';
type ProductEditProps={
    onUpdate:(product:IProduct)=>void;
}
type FormInputs = {
    name:string,
    price:number
}
 const ProductEdit = (props:ProductEditProps) => {
    const {register,handleSubmit,formState:{errors},reset}=useForm<FormInputs>();
    const navigate = useNavigate();
    const{id}= useParams();
    useEffect(()=>{
        const getProduct = async ()=>{
            const {data}= await read(id);
            reset(data);
        }
        getProduct();
    },[])
    const onSubmit:SubmitHandler<FormInputs> = data=>{
        console.log(data)
        props.onUpdate(data);
        navigate("/admin/products");
    }
  return (
    <div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Ten san pham</label>
                <input type="text" {...register('name',{required:true})} />
            </div>
            <div>
                <label htmlFor="">Gia san pham</label>
                <input type="number" {...register('price')}  />
            </div>
            <button>Update</button>
        </form>
    </div>
  )
}

export default ProductEdit