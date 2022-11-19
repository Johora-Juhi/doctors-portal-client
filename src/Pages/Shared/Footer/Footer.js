import React from 'react';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
  return (
    <footer className="p-10 text-base-content bg-cover bg-center my-28" style={{ backgroundImage: `url(${footer})` }}>
      <div className='footer'>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <div className="grid grid-flow-col gap-4">
            <p>New York - 101010 Hudson</p>
          </div>
        </div>
      </div>
      <div className='text-center pt-16'>
          <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
        </div>
    </footer>
  );
};

export default Footer;