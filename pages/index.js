import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';
import { getSession } from "next-auth/react";

export default function Home({session}) {
  if (!session) return <Login/>;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>
      <main>
        {/* sidebar */}
        <Sidebar/>
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}