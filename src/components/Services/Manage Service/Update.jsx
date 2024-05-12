import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Update() {
    const data=useLoaderData();
    console.log("from update",data)
    const { _id, image_url, service_name, price, service_area, description, displayName, providerImg } = data;

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const image_url=form.image_url.value;
        const service_name=form.service_name.value;
        const price=form.price.value
        const service_area=form.service_area.value;
        const description=form.description.value;

        const formData={image_url,service_name,price,service_area,description}
        
        fetch(`http://localhost:5000/serviceInfo/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    alert('success')
                     
                        // Swal.fire({
                        //     title: 'Success',
                        //     text: 'Data Updated successfully',
                        //     icon: 'success',
                        //     confirmButtonText: 'Cool'
                        // });
                        // navigate('/myArt');

                }
            });


    }

  return (
    <div className="bg-slate-400 mx-auto p-8 rounded shadow-md max-w-md w-full">
      <h2 className="text-xl font-bold mb-4">Update Service</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image_url" className="block text-gray-700 font-semibold mb-2">Image URL</label>
          <input type="text" id="image_url" name="image_url" placeholder="Enter Image URL" defaultValue={image_url}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="service_name" className="block text-gray-700 font-semibold mb-2">Service Name</label>
          <input type="text" id="service_name" defaultValue={service_name} name="service_name" placeholder="Enter Service Name"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">Price</label>
          <input type="text" defaultValue={price} id="price" name="price" placeholder="Enter Price"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="service_area" className="block text-gray-700 font-semibold mb-2">Service Area</label>
          <input type="text" id="service_area" name="service_area" placeholder="Enter Service Area" defaultValue={service_area}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea id="description" name="description" placeholder="Enter Description" defaultValue={description}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div className="mt-6">
          <input type="submit" value="Update"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"></input>
        </div>
      </form>
    </div>
  )
}
