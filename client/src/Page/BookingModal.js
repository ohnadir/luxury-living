import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from './Login/firebase.init';

const BookingModal = ({ booking, setBooking }) => {
  const { name, price } = booking;
  const [user] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();

    const booking = {
      serviceName: event.target.serviceName.value,
      name: event.target.name.value,
      email: event.target.email.value,
      price: event.target.price.value,
      phone: event.target.phone.value,
    }

    // post booking on database
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        
      },
      body: JSON.stringify(booking)
    })
    .then((res) => res.json())
    .then((data) => {
      event.target.reset();
      setBooking(null);
      toast.success('Booking Successfully');
    });
    
  }

    return (
      <div>
        <input type="checkbox" id="bookingModal" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              <label for="bookingModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 class="text-lg font-bold ">Booking For {name}</h3>
              <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 justify-items-center mt-10 mb-8'>
                <input type="text" name="serviceName" disabled  value={name} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="name" disabled  value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="price" disabled value={`${price}`} className="input input-bordered w-full max-w-xs" />
                <input required type="number" name="phone" placeholder='Phone Number' className="input input-bordered w-full max-w-xs" />
                <input
                  type="submit"
                  value="Booking"
                  className="input cursor-pointer input-bordered w-full max-w-xs bg-[#3A4256] text-white" />
              </form>
            </div>
          </div>
        </div>
    );
};

export default BookingModal;