import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

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
    <div className="flex flex-col items-center">
      <div className="mb-3">
        <img
          src={session.user.image}
          alt={`Foto de perfil de ${session.user.name}`}
          className="rounded-full h-24 w-24"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{session.user.name}</h1>
        <p className="text-gray-600">{session.user.email}</p>
      </div>
      <button
        onClick={handleSignOut}
        className="mt-3 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
      >
        Sair
      </button>
    </div>
  );
};

export default Home;
