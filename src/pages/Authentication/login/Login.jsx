import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {

    const {register,handleSubmit, formState: {errors}} = useForm()

    const onSubmit = data => {
        console.log(data)
    }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <p className="text-4xl font-bold">Place Login</p>
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />

          <label className="label">Password</label>
        
          <input type="password" {...register('password', {required: true, minLength: 6})} className="input" placeholder="Password" />
          {
            errors.password?.type === 'required' && <p className="text-red-600">Password is required </p>
          }
          {
            errors.password?.type === 'minLength' && <p className="text-red-700">password must be 6 characters length</p>
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

         <button className="btn bg-[#CAEB66] mt-4">Login</button>
        </fieldset>
          <p><small>Already have an account?<Link to="/register" className="btn btn-link">Register</Link></small></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
