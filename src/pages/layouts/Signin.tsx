import React from 'react'
import {SubmitHandler,useForm} from "react-hook-form"
import {useNavigate} from"react-router-dom"
import { signin } from '../../api/auth'
import { authenticate } from '../../utils/localStorage'
type TypeInpunts = {
  email:string,
  password:string
}

const Signin = () => {
  const {register,handleSubmit,formState:{errors}}=useForm<TypeInpunts>();
  const navigate = useNavigate();
  const onSumist:SubmitHandler<TypeInpunts>=async (data)=>{
    const {data:user} = await signin(data);
authenticate(user,()=>{
  navigate('/')
})
  }
  return (
    <div>
      <form action="" onSubmit={(handleSubmit(onSumist))}>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" {...register('email')} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" {...register('password')} />
        </div>
      <button>Signin</button>
      </form>
    </div>
  )
}

export default Signin