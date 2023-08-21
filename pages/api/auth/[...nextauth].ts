
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials'
import { post } from '../../../core/services/api.service'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'NextAuthCredentials',
      credentials: {},
      async authorize(credentials) {

        const myCredentials = {
          id: 1,
          name: "Allan SuRu",
          email: "allansuru23@gmail.com",
          image: "https://lh3.googleusercontent.com/a/AAcHTtebZfJ4cmVv8hzkwZQsJ1gFatiHDPKv9U-fk6v_W3lLhTQ=s96-c"
        }



        const response = await post('signin', myCredentials)
        console.log(response)

        if (response) {
          const data = await response
          return data; // Retorna os dados do usuário autenticado
        } else {
          // Trate os erros de autenticação aqui
          throw new Error("Erro ao autenticar");
        }



      }
    })
  ],

});
