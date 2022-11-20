import { set } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);
            })
    }
    return (
        <div className="card flex-shrink-0 w-1/4 mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <h1 className="text-3xl text-center">Login</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: "Email Address is required"
                    })} type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: "Password is required"
                        ,
                        minLength: { value: 6, message: 'Password must be 6 charecters or more' }
                    })} type="password" placeholder="password" className="input input-bordered" />
                    {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}
                    {loginError &&
                        <label className="label">
                            <p className="label-text text-red-500">{loginError}</p>
                        </label>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <button className="btn btn-accent">Login</button>
                </div>
                <p className='text-center label-text'>New to Doctors Portal? <Link to='/signup' className='text-primary'> Create new account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
            </form>
        </div>
    );
};

export default Login;