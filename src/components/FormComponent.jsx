import React, { useState } from "react";
import axios from "axios";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    country: "",
    city: "",
    industry: "",
    employeesCount: "",
    helpContext: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[\w.-]+@(?!hotmail|gmail|yahoo|outlook)(([a-zA-Z\d-]+\.)+)[a-zA-Z]{2,4}$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid work email.";
    }
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required.";
    if (!formData.companyName)
      newErrors.companyName = "Company name is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.industry) newErrors.industry = "Industry is required.";
    if (!formData.employeesCount) {
      newErrors.employeesCount = "Number of employees is required.";
    } else if (!/^[0-9]+$/.test(formData.employeesCount)) {
      newErrors.employeesCount = "Must be a valid number.";
    }
    if (!formData.helpContext)
      newErrors.helpContext = "Help context is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post("/api/submit-form", formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="mx-auto my-16 px-5 py-0 max-w-2xl">
      <form onSubmit={handleSubmit}>
        <h2 className="w-full font-bold text-3xl mb-8 text-center lg:mb-12 lg:text-4xl lg:leading-10">
          Join to contribute in Nookli's Vision
        </h2>

        {Object.keys(formData).map((field) => (
          <div key={field} className="mb-4">
            <label className="block mb-2 capitalize" htmlFor={field}>
              {field
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </label>
            {field !== "helpContext" ? (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                placeholder={`Your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            ) : (
              <textarea
                id={field}
                name={field}
                placeholder="Your answer"
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            )}
            {errors[field] && (
              <p className="text-red-500 text-sm">{errors[field]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-yellow-300 text-white py-2 text-xl rounded hover:bg-yellow-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
