import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { registerSchema } from "@/schema/register";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";

const register = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: registerSchema,
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
      name: "email",
      type: "email",
      placeholder: "Your E-Mail Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Your Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <div className="container mx-auto md:py-40 py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="pb-9">
          <Title addClass="text-[40px]">Register</Title>
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
                Register
              </button>
              <Link href="/auth/login">
                Already have an account? Sign in right now!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
