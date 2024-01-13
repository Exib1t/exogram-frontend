import { object, ObjectSchema, ref, string } from "yup";
import { IUserCreate } from "../../models/user/user.model.ts";

export const registerFormSchema: ObjectSchema<IUserCreate> = object({
  first_name: string().required("Field is required"),
  last_name: string().required("Field is required"),
  username: string()
    .min(2, "Field must be at least 2 characters")
    .required("Field is required"),
  password: string()
    .min(6, "Field must be at least 6 characters")
    .required("Field is required"),
  confirmPassword: string()
    .min(6, "Field must be at least 2 characters")
    .required("Field is required")
    .oneOf([ref("password")], "Fields must be equal"),
});
