import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertID) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added a drink sucecssfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <h2 className="text-6xl py-10 mx-auto">Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                <div className="gap-5 flex flex-col">
                    <label className="input input-bordered flex items-center gap-2">
                        Coffee Name
                        <input name="name" type="text" className="grow" placeholder="Espresso" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Supplier
                        <input name="supplier" type="text" className="grow" placeholder="Jane Doe" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Available Quantity
                        <input name="quantity" type="number" className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Taste
                        <input name="taste" type="text" className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Category
                        <input name="category" type="text" className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Details
                        <input name="details" type="text" className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Photo URL
                        <input id="photo" type="text" className="grow" />
                    </label>
                    <input type="submit" value="Submit" className="btn btn-wide"/>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;