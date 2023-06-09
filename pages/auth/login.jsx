import React from "react";
import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
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
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "E-Mail Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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
          <Title addClass="text-[40px]">Login</Title>
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
              <button
                className="!bg-secondary btn-primary w-full"
                type="button"
                onClick={() => signIn("github")}
              >
                with Github Login
              </button>
              <Link href="/auth/register">Do you have account ? Sign Up!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
