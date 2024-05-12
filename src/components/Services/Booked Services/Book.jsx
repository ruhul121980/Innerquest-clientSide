import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

export default function Book() {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const {
        _id,
        image_url,
        service_name,
        price,
        service_area,
        description,
        displayName,
        providerImg,
        email
      } = data;
      const current_user_name=user.displayName;
      const currentUserEmail=user.email;
      const serviceStatus="pending";

      const handleSUbmit=(e)=>{
        e.preventDefault();
        const form=e.target;
    const service_date=form.service_date.value;
    const special_instruction=form.special_instruction.value;

    const addBookingInfo={_id,image_url,service_name,price,service_area,description,displayName,email,providerImg,current_user_name,currentUserEmail,service_date,special_instruction,serviceStatus};
    console.log(addBookingInfo)

    fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addBookingInfo)

    })
    
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })

      }

    return (
        <div className="max-w-lg bg-slate-400 shadow-md rounded-lg overflow-hidden mx-auto mt-8 p-8">
            <form onSubmit={handleSUbmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Service ID</label>
                    <input type="text" className="form-input bg-gray-100 w-full" value={_id} readOnly name="service_id"/>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Service Name</label>
                    <input type="text" className="form-input bg-gray-100 w-full" value={service_name} readOnly name="service_name"/>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Service Image</label>
                    <input type="text" className="form-input bg-gray-100 w-full" value={image_url} readOnly name="service_image"/>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Provider Email</label>
                    <input type={email} className="form-input bg-gray-100 w-full" value={email} readOnly name="provider_email"/>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Provider Name</label>
                    <input type="text" className="form-input bg-gray-100 w-full" value={displayName} readOnly name="provider_name"/>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Current User Email</label>
                    <input type="email" className="form-input bg-gray-100 w-full" value={user.email} readOnly name="current_user_email"/>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Current User Name</label>
                    <input type="text" className="form-input bg-gray-100 w-full" value={user.displayName} readOnly name="current_user_name"/>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Service Taking Date</label>
                    <input type="date" className="form-input bg-gray-100 w-full" name="service_date"/>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Special Instruction</label>
                    <textarea className="form-textarea bg-gray-100 w-full" name="special_instruction"></textarea>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Price</label>
                    <input type="text" className="form-input bg-gray-100 w-full" value={price} readOnly name="price"/>
                </div>
                <div>
                <input type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full" value="Book Appointment" />

                </div>
            </form>
        </div>
    );
}
