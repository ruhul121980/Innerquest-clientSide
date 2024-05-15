
import  { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';
import CardServiceToDo from './CardServiceToDo';
import { Helmet } from 'react-helmet-async';


function ServiceToDo() {
  const [bookedServices, setBookedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user} = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://counselling-eight.vercel.app/providerBookedService/${user.email}`);
        setBookedServices(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [user.email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Inner Quest | Service To Do</title>
        
      </Helmet>
      <h2 className='text-center text-3xl my-8'>Service To Do</h2>
      {console.log(bookedServices)}
      <div className='w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {
          (bookedServices.length>0)? bookedServices.map(data=><CardServiceToDo key={data._id} data={data}></CardServiceToDo>) 
          :
          <h2 className='text-center font-bold text-5xl'>You have not any Service To Do</h2>

          }
        
        
      </div>
    </div>
  );
}

export default ServiceToDo;
