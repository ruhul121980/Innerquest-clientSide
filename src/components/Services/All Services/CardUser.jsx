import React from 'react'
import { Link } from 'react-router-dom';

export default function CardUser({datam}) {
    const {_id, image_url, service_name, price, service_area, description, displayName, providerImg } = datam;
  return (
    <div className="card w-96 glass">
    <figure>
        <img src={image_url} alt={service_name} />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Service Area: {service_area}</p>
        <p className="text-bold"> Provided By:</p>
        <div className="provider-info">
            <img src={providerImg} alt={displayName} className="provider-img" />
            <span className="provider-name">{displayName}</span>
        </div>
        <div className="card-actions justify-end">
           <Link to={`/singleServiceDetails/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
        </div>
    </div>
</div>
  )
}
