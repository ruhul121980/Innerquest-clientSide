import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function SingleServiceDetails() {
  const allData = useLoaderData();
  console.log("all data", allData);
  const {
    _id,
    image_url,
    service_name,
    price,
    service_area,
    description,
    displayName,
    providerImg,
  } = allData;

  return (
    <div>
      <h2 className="text-purple-800 text-center text-4xl my-4">
        Single Service Details
      </h2>

      <h2 className="text-purple-800 text-center text-4xl my-4">
        Service Provider Information
      </h2>
      <div className="card card-side  w-2/3 mx-auto my-5 bg-base-100 shadow-xl">
        <figure>
          <img src={providerImg} alt="Provider" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="font-bold">Name: </span>
            {displayName}
          </h2>
          <h2 className="card-title">
            <span className="font-bold">Area of Service:</span> {service_area}
          </h2>
        </div>
      </div>

      {/* start single service section */}
      <h2 className="text-purple-800 text-center text-4xl my-6">
        Service Information
      </h2>
      <div className="card w-2/3 mx-auto glass">
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
            <img src={providerImg} alt={displayName} className="provider-img rounded-full mb-5" />
            <span className="provider-name"><span className="font-bold my-5 mt-5">Name: </span>{displayName}</span>

            <div className="w-full"> 
            <Link to={`/book/${_id}`}><button className="btn btn-outline btn-primary w-full mt-5">Book Now</button></Link>
            </div>

          </div>
        </div>
      </div>
      {/* end single service section */}
    </div>
  );
}
