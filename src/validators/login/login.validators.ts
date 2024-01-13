import { object, ObjectSchema, string } from "yup";
import { IUserLogin } from "../../models/user/user.model.ts";

export const loginFormSchema: ObjectSchema<IUserLogin> = object({
  username: string()
    .min(2, "Field must be at least 2 characters")
    .required("Field is required"),
  password: string()
    .min(6, "Field must be at least 6 characters")
    .required("Field is required"),
});
