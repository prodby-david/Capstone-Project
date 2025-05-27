import React from 'react';
import Footer from '../components/footer.jsx';

const LandingPage = () => {
  return (
    <>
      <div className='flex justify-around py-5'>
        <a href="/" className='font-bold text-lg text-color'>HanaPark</a>
        <p className='text-sm text-color-3 font-semibold'>Smart Parking Made Easy</p>
      </div>
      
      <div className='flex flex-col justify-center items-center min-h-90'>

        <h2 className='text-[48px] font-bold leading-7'>Effortless Parking,</h2>

        <h2 className='text-[48px] font-bold bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent'>Right Where You Need It</h2>

        <p className='max-w-[550px] text-center text-color-2'>Smart Parking Management Designed for convenience, efficiency, and peace of mind.</p>

        <div className='flex gap-x-5 mt-3'>

          <a href="/login" className='p-3 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-md w-[90px] text-center'>Log In</a>

          <a href="" className='p-3 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-md w-[90px] text-center'>Visitors</a>

        </div>
        
      </div>
      
      <Footer />

    </>
  );
}

export default LandingPage;