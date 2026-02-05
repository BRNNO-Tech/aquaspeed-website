import React, { useEffect } from 'react';
import { BOOKING_URL } from '../constants';

const Booking: React.FC = () => {
  useEffect(() => {
    window.location.replace(BOOKING_URL);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <p className="text-slate-600 font-medium">Redirecting to booking...</p>
    </div>
  );
};

export default Booking;
