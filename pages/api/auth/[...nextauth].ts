
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials'

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
        console.log(credentials)

        // bater na api.post(signin, credentials).
        // criar um state do meu profile
        // depois remover esse mock e retornar oq tiver no post


        return {
          name: "Suru",
          email: "allansuru23@gmail.com",
          image: "https://lh3.googleusercontent.com/a/AAcHTtebZfJ4cmVv8hzkwZQsJ1gFatiHDPKv9U-fk6v_W3lLhTQ=s96-c"
        }
      }
    })
  ],

});
