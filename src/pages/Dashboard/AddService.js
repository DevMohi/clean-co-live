import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';


const AddService = () => {
    const [imageURL, setImageURL] = useState("")
    const [loading, setLoading] = useState(false)
    console.log(imageURL)
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            image: imageURL,
        }
        const res = await fetcher.post('add-service', serviceData);
        console.log(res)
        reset()
        setImageURL("");
    }
    const handleUploadImage = event => {
        setLoading(true)
        const image = (event.target.files[0])

        // ekta new form object toiri korte hoi 
        const formData = new FormData();

        // can use append too  
        formData.set("image", image);

        axios.post("https://api.imgbb.com/1/upload?key=312cec85709bcf242a167c63ffe31854", formData)
            .then(res => {
                setImageURL(res.data.data.display_url)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className='bg-accent w-full flex items-center justify-center h-screen'>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-2xl text-center'>Add Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Service Name</span>
                            </label>
                            <input type="text"
                                class="input input-bordered"
                                {...register("serviceName")}
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Service Charge</span>
                            </label>
                            <input type="text"
                                class="input input-bordered"
                                {...register("serviceCharge")}
                            />

                        </div>

                        <div class="form-control">
                            <label htmlFor='image' class={loading ? "btn btn-primary mt-5 loading" : "btn btn-primary mt-5 "}>
                                Upload Image
                            </label>
                            <input type="file"
                                id='image'
                                class="input input-bordered hidden"
                                onChange={handleUploadImage}
                            />

                        </div>

                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary"
                                disabled={!imageURL ? true : false}
                            >Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;