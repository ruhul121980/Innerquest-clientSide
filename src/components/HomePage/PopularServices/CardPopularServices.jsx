import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

export default function CardPopularServices({ service }) {
  const { _id, image_url, service_name, price, service_area, description, displayName, providerImg } = service;
  const { user } = useContext(AuthContext);

  return (
    <div className="card md:w-80 lg:w-96 glass">
      <figure>
        <img src={image_url} alt={service_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Service Area: {service_area}</p>
        <p className="text-bold"> Provided By:</p>
        <div className="provider-info flex items-center">
          <img src={providerImg} alt={displayName} className="provider-img rounded-full mb-3 mr-3 w-10 h-10" />
          <span className="provider-name mt-5">{displayName}</span>
        </div>
        <div className="card-actions justify-end">
          {
            user ? <Link to={`/singleServiceDetails/${_id}`}> <button className="btn btn-primary">View Details</button></Link> :
              <Link to="/login"><button className="btn btn-primary">View Details</button></Link>
          }
        </div>
      </div>
    </div>
  );
}
