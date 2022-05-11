import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment

    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, slot, name);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form className="grid grid-cols-1 gap-2 justify-items-center" onSubmit={handleSubmit}>
                        <input type="text" value={format(date, "PP")} className="input w-full max-w-xs border-2 border-gray-200" disabled />
                        <select name='slot' className="select select-ghost w-full max-w-xs border-2 border-gray-200">
                            {slots.map(slot => <option>{slot}</option>)}
                        </select>
                        <input name='name' type="text" placeholder="Full name" className="input w-full max-w-xs border-2 border-gray-200" />
                        <input name='email' type="text" placeholder="Email address" className="input w-full max-w-xs border-2 border-gray-200" />
                        <input name='phone' type="text" placeholder="Phone number" className="input w-full max-w-xs border-2 border-gray-200" />
                        <input type="submit" value="Submit" className="btn bg-gradient-to-r from-secondary to-primary font-bold text-white mt-0 max-w-xs w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;