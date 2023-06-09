import * as Yup from "yup";

export const registerSchema = Yup.object({
    fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  password: Yup.string().required("Password is required."),
  confirmPassword: Yup.string().required("Password is required.")
});