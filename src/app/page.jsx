"use client"
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  //Show Form on Submit
  let [showForm,setShowForm] = useState(false);
  let showFormHandler = ()=>{
    setShowForm(true)
  }
  //Dynamic Variables
  let [name, setName] = useState(''); 
  let [email, setEmail] = useState(''); 
  let [phone,setPhone] =  useState('')
  let [demands,setDemands] = useState('')

  //Form Validation
  let [errors, setErrors] = useState({}); 
  let [isFormValid, setIsFormValid] = useState(false); 
  
  useEffect(() => { 
    validateForm(); 
  }, [name, email,phone]); 

  const validateForm = () => { 
    let errors = {}; 

    if (!name) { 
        errors.name = 'Name is required.'; 
    } 

    if (!email) { 
        errors.email = 'Email is required.'; 
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
        errors.email = 'Email is invalid.'; 
    } 

    if (!phone) { 
        errors.phone = 'Phone Number is required.'; 
    } else if (phone.length < 10) { 
        errors.phone = 'Must be 10 digits'; 
    } 

    setErrors(errors); 
    setIsFormValid(Object.keys(errors).length === 0); 
    }; 

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (isFormValid) { 
        console.log('Form submitted successfully!'); 
    } else { 
        console.log('Form has errors. Please correct them.'); 
    } 
}; 
  return (
    <main className="container-fluid">
      

      <article className="flex justify-around items-center w-full">
        <div className="pt-4">
          <button onClick={showFormHandler} type="button" className="text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Get a Quote
          </button>
        </div>
        <div className="pt-8">
        {showForm && (
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              {errors.name && <p className="text-red-500 text-base mb-1.5">{errors.name}</p>} 
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name:</label>
              <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
            </div>
            <div className="mb-5">
              {errors.email && <p className="text-red-500 text-base mb-1.5">{errors.email}</p>} 
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email:</label>
              <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" />
            </div>
            <div className="mb-5">
                {errors.phone && <p className="text-red-500 text-base mb-1.5">{errors.phone}</p>}
                <label htmlFor="phone-input" value={phone} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
                <input type="text" id="phone-input" onChange={(e)=>{setPhone(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-456-7890" />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Demands:</label>
              <textarea id="message" value={demands} onChange={(e)=>{setDemands(e.target.value)}} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button type="submit" onClick={handleSubmit} className="text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
            </div>
          </form>
        )}
        </div>
      </article>

    </main>
  );
}
