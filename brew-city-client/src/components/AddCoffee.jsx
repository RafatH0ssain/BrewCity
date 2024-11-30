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

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
    }
    return (
        <div>
            <h2 className="text-6xl py-10 mx-auto">Add Coffee</h2>
            <form>
                <div className="gap-5 flex flex-col">
                    <label className="input input-bordered flex items-center gap-2">
                        Coffee Name
                        <input type="text" className="grow" placeholder="Espresso" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Supplier
                        <input type="text" className="grow" placeholder="Jane Doe" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Available Quantity
                        <input type="number" className="grow"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Taste
                        <input type="text" className="grow"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Category
                        <input type="text" className="grow"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Details
                        <input type="text" className="grow"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Photo URL
                        <input type="text" className="grow"/>
                    </label>
                    <button className="btn btn-wide">Wide</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;