import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_Key;
    const { data: specialties = [], refetch } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json();
            return data;
        }
    });

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    // save doctor information to the database 
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success('Doctor Added !', {
                                    position: toast.POSITION.TOP_CENTER
                                });
                                navigate('/dashboard/managedoctors')
                            }
                        }
                        )
                }
            })
    }

    return (
        <div>
            <div className='bg-blue-50 p-8'>
                <h1 className='text-xl font-bold'>Add a New Doctor</h1>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100 my-8">
                    <form onSubmit={handleSubmit(handleAddDoctor)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: "Name is required"
                            })} type="text" placeholder="Enter Your Name" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: "Email Address is required"
                            })} type="email" placeholder="Enter Your Email" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <select {...register("specialty", {
                                required: "Specialty is required"
                            })} className="select select-bordered w-full">
                                {
                                    specialties.map(specialty => <option key={specialty._id}
                                        value={specialty.name}>
                                        {specialty.name}
                                    </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <input {...register("image",
                                {
                                    required: "Image is required"
                                })}
                                type="file" placeholder="Upload Your Photo" className="input input-bordered" />
                            {/* {errors.email && <p className='text-red-500'>{errors.email?.message}</p>} */}
                        </div>
                        {/* {loginError &&
                        <label className="label">
                            <p className="label-text text-red-500">{loginError}</p>
                        </label>} */}
                        <div className="form-control">
                            <button className="btn btn-accent">Add new doctor</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddDoctor;