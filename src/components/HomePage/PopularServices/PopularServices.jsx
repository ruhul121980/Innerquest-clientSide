import { useState, useEffect } from 'react';
import CardPopularServices from './CardPopularServices';
import { Link } from 'react-router-dom';

function PopularServices() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/serviceInfo'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        }
        fetchData();
        
    }, []); 

    return (
        <div>
            <h2 className='text-3xl text-center font-bold text-purple-700 my-5'>Our Popular Services</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-11/12 mx-auto'>
           {services.slice(0,6).map(service => (
                <CardPopularServices key={service._id} service={service} />
            ))}
           </div>
           <div className='text-center my-16'>
           <Link to="/allServices"><button className="btn btn-wide bg-purple-800 text-white text-bold ">Show All</button></Link>
           </div>
        </div>
    );
}

export default PopularServices;
