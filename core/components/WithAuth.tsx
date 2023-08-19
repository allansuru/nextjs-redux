import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "authenticated") {
        return;
      }

      if (status === "loading") {
        return;
      }

      router.push("/auth");
    }, [status, router]);

    return status === "authenticated" ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
