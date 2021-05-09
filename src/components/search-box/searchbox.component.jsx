import React from 'react';
import './searchbox.style.css';

export const SearchBox = ({ placeholder, handleChange}) => (
    <div className='searchdiv'><input className='search' type='search' placeholder={placeholder} onChange={handleChange}/></div>
)