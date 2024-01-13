import { number, object, ObjectSchema, string } from "yup";
import { IUserUpdate } from "../../models/user/user.model.ts";

export const profileFormSchema: ObjectSchema<IUserUpdate> = object({
  id: number().required("Field is required"),
  first_name: string().required("Field is required"),
  last_name: string().required("Field is required"),
  username: string()
    .min(2, "Field must be at least 2 characters")
    .required("Field is required"),
});
