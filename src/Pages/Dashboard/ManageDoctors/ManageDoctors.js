import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null);
    }
    const handleDetetingDoctor = doctor => {
        console.log(doctor);
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${doctor.name} deleted successfully`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })
    }
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div className='bg-blue-50 p-8'>
            <div>
                <h1 className='text-xl font-bold'>Manage Doctors: {doctors?.length}</h1>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) =>
                                <tr key={doctor._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs">Delete</label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={'Are you sure you want to delete'}
                    message={`If you delete ${deletingDoctor.name}. It can not be done`}
                    successAction={handleDetetingDoctor}
                    modalData={deletingDoctor}
                    successButtonName={'Delete'}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div >
    );
};

export default ManageDoctors;