import { GetServerSideProps } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AuthForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signIn("credentials", {
        ...data,
      });

      router.push("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="text"
                className="mb-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && <span>Email é obrigatório</span>}
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <input
              type="password"
              className="mb-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Senha"
              {...register("password", { required: true })}
            />
            {errors.password && <span>Senha é obrigatória</span>}
          </div>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Entrar
          </button>

          <div className="mt-4 text-center text-gray-500 flex items-center justify-center space-x-2">
            <span>Entre com</span>
            <button
              type="button"
              onClick={() => signIn("google")}
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white p-1 text-xs flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-1" /> Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
