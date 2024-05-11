import { useState, useEffect } from 'react';
import CardPopularServices from '../../HomePage/PopularServices/CardPopularServices';


function AllServices() {
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
            <h2 className='text-3xl text-center font-bold text-purple-700 my-5'>All Services</h2>
           <div className='grid grid-cols-1 gap-5  max-w-sm mx-auto'>
           {services.map(service => (
                <CardPopularServices key={service._id} service={service} />
            ))}
           </div>
           
        </div>
    );
}

export default AllServices;
