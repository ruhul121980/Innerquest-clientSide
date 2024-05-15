import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CardUser from './CardUser';
import { Helmet } from 'react-helmet-async';

// Debounce function to delay the execution of a function
const debounce = (fn, delay) => {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default function AllServices() {
  const [searchText, setSearchText] = useState('');

  // Debounce the search function to wait for 300ms after the user stops typing
  const delayedSearch = debounce((text) => setSearchText(text), 300);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['serviceInfo', searchText],
    queryFn: () =>
      axios.get(`http://localhost:5000/serviceInfo2?search=${searchText}`).then(res => res.data),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className='text-center '>
      <Helmet>
        <title>Inner Quest | All Service</title>
        
      </Helmet>
      <div className='max-w-sm mx-auto my-5 mb-5 border border-solid border-blue-500 '>
      <input
        type="text"
        placeholder="Search services..."
        value={searchText}
        onChange={(e) => delayedSearch(e.target.value)} 
      />
      </div>
      <div className='max-w-sm mx-auto  grid grid-cols-1'>
        {data.map(datam => (
          <CardUser key={datam._id} datam={datam}></CardUser>
        ))}
      </div>
    </div>
  );
}
