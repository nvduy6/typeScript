
import {useForm,SubmitHandler} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { sigupAdd } from '../../api/auth';

// type SignupAddProps={
//     name:string,
// onAdduser:(user:TypeInputs)=>void;
// }
type TypeInputs = {
    name:string,
    email:string,
    password:string,
}
const Signup = () => {
    const {register,handleSubmit,formState:{errors}}=useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit:SubmitHandler<TypeInputs>=data=>{
    // props.onAdduser(data);
    sigupAdd(data);
    navigate("/signin")
    }
  return (
    <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">name</label>
                <input type="text" {...register('name')} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" {...register('email')} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" {...register('password')} />
            </div>
            <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup