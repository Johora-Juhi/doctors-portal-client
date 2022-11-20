import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = data => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                toast.success('Success Notification !', {
                    position: toast.POSITION.TOP_CENTER
                });
                
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.log(error))
                    console.log(user);
            })
            
            .catch(error => {
                console.error(error);
                setSignupError(error.message);
            })
    }
    return (
        <div className="card flex-shrink-0 w-1/4 mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                <h1 className="text-3xl text-center">Sign Up</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                        required: "Name is required"
                    })} type="name" placeholder="name" className="input input-bordered" />
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: "Email Address is required"
                    })} type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                {signupError &&
                    <label className="label">
                        <span className="label-text text-red-500">{signupError}</span>
                    </label>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: "Password is required"
                        ,
                        minLength: { value: 6, message: 'Password must be 6 charecters or more' },
                        pattern: { value: /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "])/, message: "Password must be strong" }
                    })} type="password" placeholder="password" className="input input-bordered" />
                    {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-accent">SignUp</button>
                </div>
                <p className='text-center'>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;