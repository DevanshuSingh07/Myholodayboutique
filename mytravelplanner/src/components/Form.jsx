import React, { useState } from 'react';
import sendForm from '../components/fetch'
import ResponseBox from '../helpers/ResponseBox';
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dastination: '',
    date: '',
    message: '',
  });

  const[errcode,seterrcode]=useState(null)

  const[activeres,setactiveres]=useState(false)

  const handleInputChange = (e) => {
    
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call or storing data)
   const res= await sendForm(formData);
   console.log(res.code)
   if(res.num === "1"){
    setactiveres(true);
   }
   else{
    setactiveres(true);
    seterrcode(res.code)

   }
  };

  const closeModal=()=>{
      setactiveres(false)
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          We would love to hear from you! Please fill out the form below and our team will get in touch with you.
        </p>

        <form
          className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          onSubmit={handleSubmit}
           method='post'
          action=''
        >
          {/* Name */}
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Destination */}
          <div className="sm:col-span-2">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
              Desired Destination
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Travel Date */}
          <div className="sm:col-span-2">
            <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700">
              Expected Travel Date
            </label>
            <input
              type="date"
              name="date"
              id="travelDate"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Information or Special Requests
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Let us know your preferences..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ease-in-out duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {
        activeres &&
        <ResponseBox res={errcode} onClose={closeModal}/>
      }
    </div>
  );
};



export default Form;
