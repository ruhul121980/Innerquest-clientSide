import { Link } from 'react-router-dom';
import Update from './Update';
import Swal from 'sweetalert2';

export default function CardManageService({ data }) {
    const { _id, image_url, service_name, price, service_area, description, displayName, providerImg } = data;

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://counselling-eight.vercel.app/serviceInfo/${_id}`, { 
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your data has been deleted.',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        }).then(() => {
                            
                            window.location.reload();
                        });
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Failed to delete data.',
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        });
                    }
                })
                .catch(error => {
                    console.error('Error deleting data:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'An error occurred while deleting data.',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    });
                });
            }
        });
    };

    return (
        <div className="card w-96 glass">
            <figure>
                <img className="max-h-64 w-full" src={image_url} alt={service_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{description}</p>
                <p><span className="font-bold">Price:</span> {price}</p>
                <p><span className="font-bold">Service Area:</span> {service_area}</p>

                <div className="flex gap-10 mt-6">
                    <Link to={`/update/${_id}`}><button className="btn btn-outline w-12 md:w-24 lg:24">Edit</button></Link>
                    <div><button onClick={() => handleDelete(_id)} className="btn btn-outline w-12 md:w-24 lg:24">Delete</button></div>
                </div>
            </div>
        </div>
    );
}
