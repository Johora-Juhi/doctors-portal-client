import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookinModal = ({ treatement, selectedDate, setTreatement, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots } = treatement;
    console.log(slots);
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            slot,
            treatement: name,
            patientName,
            email,
            phone

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatement(null);
                    toast.success('Booking Done', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    refetch();
                }
                else{
                    toast.error(data.message, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })

        console.log(booking);


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-6 grid gap-2 grid-cols-1'>
                        <input type="text" value={date} className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot =>
                                    <option value={slot}>{slot}</option>
                                )
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className=' btn bg-accent text-white w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookinModal;