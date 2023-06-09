import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import { adminLoginSchema } from "@/schema/adminLogin";

const Index = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminLoginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto md:py-40 py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="pb-9">
          <Title addClass="text-[40px]">Admin Login</Title>
        </div>
        <div className="md:w-[60%] w-[100%] ">
          <form
            className="flex flex-wrap justify-center"
            onSubmit={handleSubmit}
          >
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
            <div className="flex flex-col gap-3 w-full text-center">
              <button className="btn-primary w-full" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
