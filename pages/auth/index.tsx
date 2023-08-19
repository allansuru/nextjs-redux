import { GetServerSideProps } from "next";
import AuthForm from "../../modules/auth/AuthForm";
import { getSession } from "next-auth/react";

const AuthPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <AuthForm />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AuthPage;
