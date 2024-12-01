import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={photo} alt={details} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity} - {supplier}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{taste}</button>
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/${_id}`} className="bg-blue-600 btn">Edit</Link>
                        <button onClick={() => handleDelete(_id)}
                            className="bg-red-800 btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoffeeCard;