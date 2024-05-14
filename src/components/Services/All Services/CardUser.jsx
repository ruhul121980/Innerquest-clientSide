import React from 'react'

export default function CardUser({datam}) {
    const {_id, image_url, service_name, price, service_area, description, displayName, providerImg } = datam;
  return (
    <div className="card w-96 glass">
  <figure><img src={image_url} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
  )
}
