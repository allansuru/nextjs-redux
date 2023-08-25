import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { createUser, resetUser, updateUser } from "./shared/state/userThunk";
import { User } from "./shared/interfaces/user";
import { format } from "date-fns";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  dateOfBirth: yup
    .date()
    .max(new Date(), "Date must be in the past")
    .required("Date of Birth is required"),
  isAdmin: yup.boolean(),
  id: yup.number(),
  dateCreated: yup.date(),
});

const UserDetailsForm = ({ isEditing, userId }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) =>
    state.user.users.find((user) => user.id === Number(userId))
  );

  const success = useSelector((state) => state.user.success);

  const { register, formState, handleSubmit } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: isEditing ? user : {},
  });

  const onSubmit = (formData: User) => {
    const payload = {
      ...formData,
      id: isEditing ? formData.id : Math.floor(Math.random() * 1000),
      dateCreated: new Date().toISOString(),
      dateOfBirth: format(new Date(formData.dateOfBirth), "yyyy-MM-dd"),
    };

    isEditing ? dispatch(updateUser(payload)) : dispatch(createUser(payload));
  };

  useEffect(() => {
    console.log(success);
    if (success) {
      router.push("/user");
      dispatch(resetUser());
    }
  }, [success]);

  return (
    <>
      <div className="mt-2">
        <h2>{isEditing ? "Edit User" : "Create User"}</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <input
              {...register("name")}
              className="mb-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.name && (
              <p className="text-red-600 text-xs mt-1">
                {formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <input
              {...register("description")}
              className="mb-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.description && (
              <p className="text-red-600 text-xs mt-1">
                {formState.errors.description.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <input
              {...register("email")}
              className="mb-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.email && (
              <p className="text-red-600 text-xs mt-1">
                {formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Date of Birth
            </label>
            <input
              type="date"
              {...register("dateOfBirth")}
              className="mb-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.dateOfBirth && (
              <p className="text-red-600 text-xs mt-1">
                {formState.errors.dateOfBirth.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Admin
            </label>
            <input type="checkbox" {...register("isAdmin")} className="mr-1" />
          </div>
          <button
            type="submit"
            disabled={!formState.isValid}
            className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              !formState.isValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {formState.isSubmitting ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UserDetailsForm;
