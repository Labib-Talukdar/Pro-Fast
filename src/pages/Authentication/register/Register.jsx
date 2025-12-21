import React from 'react';
 import {useForm} from 'react-hook-form'
import UseAuth from '../../../hocks/UseAuth';
import { Link } from 'react-router';
import SocialLogin from '../socialLogin/SocialLogin';

const Register = () => {
    const {register,handleSubmit,formState: {errors}} = useForm();

  const {createUser} =  UseAuth();

     const onsubmit = (data) => {
      console.log(data);
      createUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })
     }
    

    return (
          <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <fieldset className="fieldset">
        <h1 className='text-4xl font-bold'>Create An Account</h1>
          <label className="label">Email</label>
          <input type="email" defaultValue="email"{...register('email')} className="input" placeholder="Email" />

          <label className="label">Password</label>
        
          <input type="password" defaultValue="password"{...register("password", {required: true , minLength: 6})} className="input" placeholder="Password" />
            {
                errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>
            }
            {
                errors.password?.type === "minLength" && <p className='text-red-500'>password must be characters</p>
            }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
           <button className="btn  bg-[#CAEB66] mt-4">Register</button>
        </fieldset>
        <p><small> New to this website?<Link to="/login" className='btn btn-link' >Login</Link></small></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
 
    );
};

export default Register;