// pages/index.tsx
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return (
      <>
        <div>
          Você não está autenticado. Vá até a página de login para começar..
        </div>
        <div className="mt-3">
          <Link
            href="/auth"
            className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Autenticar
          </Link>
        </div>
      </>
    );
  }

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Nome: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      <p>ID do Usuário: {session.user.id}</p>
    </div>
  );
};

export default Home;
