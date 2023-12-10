import React from 'react';

const Footer = () => {
  const thisYear = new Date();
  const fullYear = thisYear.getFullYear();
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto'>
        <p className='text-white text-center'>Copyright &copy; Ecommerce shop {fullYear}. All rights reserved.</p>
      </div>
    </footer>
  )
};

export default Footer;
