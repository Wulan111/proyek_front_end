import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="w-full h-16 flex items-center px-14 justify-between" style={{ backgroundColor: '#682f01' }}>
  <Link to={"/"} className="text-3xl font-semibold font-Montesarrat" style={{ color: 'orange' }}>
    ART GALLERY
  </Link>  
        <div className="flex">
        <Link to={"/add-user"} className="hover:bg-orange-700 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg font-bold py-2 px-2" style={{ backgroundColor: 'orange', color: 'white' }}>Add Visitor</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;



