"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"
import validator from "validator";

const schema = z.object({
    email : z.string().email({message  : 'Enter a valid Email'}),
    name : z.string().min(1, {message : 'Name is Required'}),
    phone: z.string().refine(validator.isMobilePhone)
})


export default function ZodVali(){
     //Show Form on Submit
     let [showForm,setShowForm] = useState(false);
     let showFormHandler = (e)=>{
         setShowForm(true)   
     }
    //  defaultValues : {
    //     email : "najeeb@gmail.com",
    // },
     const {register,handleSubmit,formState: { errors }} = useForm({
            resolver : zodResolver(schema)
        });

     const onSubmit=(data) =>{
        console.log(data);
     };

    return(
        <main className="container-fluid">
        <article className="flex justify-around items-center w-full">
            <div className="pt-4">
                <button type="button" onClick={showFormHandler} className="text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Get a Quote
                </button>
            </div>
            <div className="pt-8">
            {showForm && (
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name:</label>
                    <input {...register('name')} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
                    {errors.name && 
                        <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                            {errors.name?.message && <p>{errors.name.message}</p> }
                        </div>
                        }
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email:</label>
                    <input {...register('email')} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" />
                    {errors.email?.message && <p>{errors.email.message}</p> }
                </div>
                <div className="mb-5">
                    <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
                    <input {...register('phone')} type="text" id="phone-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-456-7890" />
                    {errors.phone?.message && <p>{errors.phone.message}</p> }
                </div>
    
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Demands:</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button type="submit" onClick={handleSubmit} className="text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
                </div>
                </form>
            )}
            </div>
        </article>

    </main>
    )
}