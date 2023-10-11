import * as yup from "yup"
import './style.css'
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import instance from "./axios"


function App() {

  const userSchema = yup.object().shape({

  fullname:yup.string().min(4).required("enter name"),
  password:yup.string().min(10).min(4).required("enter password"),
  email:yup.string().email().required("enter valid email"),
  Number:yup.string().min(10).max(12).required("you Number")
  }) 
  const {handleSubmit,register,formState:{errors}} = useForm({
    resolver:yupResolver(userSchema)
  })

  const forSubmit = (data)=>{
    console.log(data)

    instance.post("http://localhost:4000/api/v1/userRegister",data)
  }
  return (
    <div className="collem">
      <form className="form" onSubmit={handleSubmit(forSubmit)}>
       <h3 id="sign"> SignUp</h3> 
      <label id="main">Full name</label> <br/>
      <input type='text' id="clain" placeholder='entername'{...register("fullname")} /> <br/>
      <span>{errors.fullname?.message}</span><br/>
      <label id="main">password</label> <br/>
      <input type='text' id="clain" placeholder='password'{...register("password")}  /> <br/>
      <span>{errors.password?.message}</span><br/>
      <label id="main">Email</label> <br/>
      <input type='text' id="clain" placeholder='email'  {...register("email")} /> <br/>
       <span>{errors.email?.message}</span><br/>
       <label id="main">Mobile Number</label> <br/>
      <input type='num' id="clain" placeholder='Number' {...register("Number")}  /> <br/>
       <span>{errors.Number?.message}</span><br/>
      <button > submit </button>
       
      </form>      
    </div>
  );
}

export default App;
