import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from "formik";
import { reservationSchema } from "../schema/reservation";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your E-Mail Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="container mx-auto py-24">
      <div className="pb-4">
        <Title addClass="text-[40px]">Book a Table</Title>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 md:gap-y-0 gap-y-8 items-center">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
              <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />          ))}
          <button className="btn-primary" type="submit">
            Book Now
          </button>
        </form>
        <div className="grid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7579.96111851608!2d35.3327261917558!3d36.98638514458705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f63d858e8e5%3A0xd51db4e24fd9f1e3!2zQsO8ecO8ayBTYWF0IEt1bGVzaQ!5e0!3m2!1str!2str!4v1686229735891!5m2!1str!2str"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
