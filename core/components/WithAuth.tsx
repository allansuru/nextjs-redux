import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "authenticated") {
        // Usuário autenticado, permitir acesso à página
        return;
      }

      if (status === "loading") {
        // Aguarde até que o estado da sessão seja carregado
        return;
      }

      // Redirecionar para a página de autenticação
      router.push("/auth");
    }, [status, router]);

    // Renderizar o componente se o usuário estiver autenticado
    return status === "authenticated" ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
