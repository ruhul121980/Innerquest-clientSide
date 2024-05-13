import { useState, useEffect, useContext } from 'react';

import { AuthContext } from "../../../providers/AuthProvider";
import CardManageService from './CardManageService';

function ManageService() {
    const [services, setServices] = useState([]);
    const { user} = useContext(AuthContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://counselling-eight.vercel.app/matchServiceInfo/${user.email}`); 
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
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-2/3 mx-auto'>
            {
                
                    services.map(data=> <CardManageService key={data._id} data={data}></CardManageService>)
                
            }
        </div>



            
    );
}

export default ManageService;
