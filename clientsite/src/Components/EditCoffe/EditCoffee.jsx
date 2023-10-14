import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import cover from '/images/more/11.png'
import Swal from 'sweetalert2';



const EditCoffee = () => {

    const editedCoffe = useLoaderData();
    console.log(editedCoffe._id)
    const navigate = useNavigate()
    // const { _id } = editCoffee;
    // console.log(_id)

    const editCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;

        const updateCoffe = { name, chef, supplier, taste, category, details, photoURL };
        // console.log(updateCoffe)
        fetch(`http://localhost:8081/coffees/${editedCoffe._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateCoffe),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
                Swal.fire(
                    'Updated successfully!',
                    'Your file has been deleted.',
                    'success'
                )
            })
    }

    return (
        <div className='min-h-screen py-10'>
            <div className='py-10' style={{ backgroundImage: `url(${cover})` }}>
                <Link to='/'>
                    <div className='flex justify-start container mx-auto items-center gap-2 mb-10'>
                        <BsArrowLeft className='text-3xl font-bold text-[#331A15]' />
                        <p className='text-2xl font-bold font-primary text-[#331A15]'>Back to home</p>
                    </div>
                </Link>
                <div className='container mx-auto mb-10 bg-[#F4F3F0] p-20 rounded-lg bg-blend-overlay bg-opacity-70'>
                    <div className='text-center mb-10'>
                        <h1 className='text-5xl font-bold font-primary text-[#374151] drop-shadow-2xl'>Update Existing Coffee Details</h1>
                        <p className='text-lg font-thin mt-4'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br />its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br />to using Content here.</p>
                    </div>
                    <form onSubmit={editCoffee}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            <div className='space-y-4'>
                                <label className='text-xl font-bold'>Name</label>
                                <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full border-none" required />
                            </div>
                            <div className='space-y-4'>
                                <label className='text-xl font-bold'>Chef</label>
                                <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered w-full border-none" required />
                            </div>
                            <div className='space-y-4'>
                                <label className='text-xl font-bold'>Supplier</label>
                                <input type="text" name='supplier' placeholder="Enter coffee Supplier" className="input input-bordered w-full border-none" required />
                            </div>
                            <div className='space-y-4'>
                                <label className='text-xl font-bold'>Taste</label>
                                <input type="text" name='taste' placeholder="Enter coffee Taste" className="input input-bordered w-full border-none" required />
                            </div>
                            <div className='space-y-4'>
                                <label className='text-xl font-bold'>Category</label>
                                <input type="text" name='category' placeholder="Enter coffee Category" className="input input-bordered w-full border-none" required />
                            </div>
                            <div className='space-y-4'>
                                <label className='text-xl font-bold'>Details</label>
                                <input type="text" name='details' placeholder="Enter coffee Details" className="input input-bordered w-full border-none" required />
                            </div>
                        </div>
                        <div className='space-y-4 mt-6'>
                            <label className='text-xl font-bold'>Photo</label>
                            <input type="text" name='photoURL' placeholder="Enter photo URL" className="input input-bordered w-full border-none " required />
                        </div>
                        <div className='space-y-4 mt-10'>
                            <input type="submit" value="Update Coffe" className="input capitalize btn text-2xl font-thin bg-[#D2B48C] input-bordered w-full font-primary border-[#331A15] hover:bg-[#D2B48C]" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditCoffee