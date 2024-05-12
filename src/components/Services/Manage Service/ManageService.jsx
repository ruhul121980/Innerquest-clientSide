import { useState, useEffect, useContext } from 'react';

import { AuthContext } from "../../../providers/AuthProvider";
import CardManageService from './CardManageService';

function ManageService() {
    const [services, setServices] = useState([]);
    const { user} = useContext(AuthContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:5000/matchServiceInfo/${user.email}`); 
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
            {
                services.map(data=> <CardManageService key={data._id} data={data}></CardManageService>)
            }
        </div>



            
    );
}

export default ManageService;
