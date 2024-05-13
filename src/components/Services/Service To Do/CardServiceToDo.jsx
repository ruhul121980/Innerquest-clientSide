import { useState } from 'react';

export default function CardServiceToDo({ data }) {
  const {
    _id,
    image_url,
    service_name,
    price,
    service_area,
    description,
    displayName,
    providerImg,
    service_date,
    current_user_name,
  } = data;

  const [serviceStatus, setServiceStatus] = useState(data.serviceStatus);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    console.log("now", newStatus);

    fetch(`http://localhost:5000/providerBookedService2/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newStatus })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
     
      setServiceStatus(newStatus);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="card w-96 glass">
      <figure>
        <img className="w-full max-h-80" src={image_url} alt={service_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Service Area: {service_area}</p>
        <p>Booked By: {current_user_name}</p>
        <p className="text-bold">Appointment Date: {service_date}</p>
        <p className="text-bold">Service Status: {serviceStatus}</p>
        <select value={serviceStatus} onChange={handleStatusChange}>
          <option value="pending">Pending</option>
          <option value="working">Working</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
}
