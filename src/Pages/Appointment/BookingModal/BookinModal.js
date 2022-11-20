import React from 'react';
import { format } from 'date-fns';

const BookinModal = ({ treatement, selectedDate,setTreatement }) => {
    const { name, slots } = treatement;
    const date = format(selectedDate, 'PP')

    const handleBooking=event=>{
        event.preventDefault();
        const form=event.target;
        const patientName=form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const slot=form.slot.value;

        const booking={
            appointmentDate: date,
            slot,
            treatement: name,
            patientName,
            email,
            phone
            
        }

        console.log(booking);
        setTreatement(null)
        
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-6 grid gap-2 grid-cols-1'>
                        <input name='slot' type="text" value={date} className="input input-bordered w-full" disabled />
                        <select className="select select-bordered w-full">
                            {
                                slots.map(slot =>
                                    <option value={slot}>{slot}</option>
                                )
                            }
                        </select>                        
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className=' btn bg-accent text-white w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookinModal;