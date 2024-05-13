
import { Link } from "react-router-dom";

export default function CardBookedService({ data}) {
  const {_id, image_url, service_name, price, service_area, description, displayName, providerImg,service_date,serviceStatus } = data;

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
              <p className="text-bold"> Provided By:</p>
              <div className="provider-info">
                  <img src={providerImg} alt={displayName} className="provider-img rounded-full" />
                  <span className="provider-name">
                   Name: {displayName}</span>
              </div>
              <p className="text-bold"> Appointment Date: {service_date}</p>
              <p className="text-bold"> Service Status: {serviceStatus}</p>

              
          </div>
      </div>
  );
}

