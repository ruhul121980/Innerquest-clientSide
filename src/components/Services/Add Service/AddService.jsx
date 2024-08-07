import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
export default function AddService() {
  const { user, logOut } = useContext(AuthContext);
  // console.log("tset",user)
  const displayName=user.displayName;
  const email=user.email;
  const providerImg=user.photoURL;
  
  
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;
    const image_url=form.image_url.value;
    const service_name=form.service_name.value;
    const price=form.price.value;
    const service_area=form.service_area.value;
    const description=form.description.value;
    
    const addServiceInfo={image_url,service_name,price,service_area,description,displayName,email,providerImg};
    // console.log(addServiceInfo)

    fetch('https://counselling-eight.vercel.app/serviceInfo',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(addServiceInfo)
    })
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        if(data.insertedId){
          Swal.fire({
            icon: 'success',
            title: 'Success...',
            text: 'Added Successfully',
          });
          form.reset();
        }
      })

  }
  

  return (
    <div className="bg-slate-400 mx-auto p-8 rounded shadow-md max-w-md w-full">
      <Helmet>
        <title>Inner Quest | Add Service</title>
        
      </Helmet>
      <h2 className="text-xl font-bold mb-4">Add Service</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image_url" className="block text-gray-700 font-semibold mb-2">Image URL</label>
          <input type="text" id="image_url" name="image_url" placeholder="Enter Image URL"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="service_name" className="block text-gray-700 font-semibold mb-2">Service Name</label>
          <input type="text" id="service_name" name="service_name" placeholder="Enter Service Name"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">Price</label>
          <input type="text" id="price" name="price" placeholder="Enter Price"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="service_area" className="block text-gray-700 font-semibold mb-2">Service Area</label>
          <input type="text" id="service_area" name="service_area" placeholder="Enter Service Area"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea id="description" name="description" placeholder="Enter Description"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div className="mt-6">
          <input type="submit" value="Add Service"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"></input>
        </div>
      </form>
    </div>
  );
}
