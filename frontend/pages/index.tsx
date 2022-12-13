import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useReducer, useState } from 'react';
import { FaCcMastercard } from 'react-icons/fa';
import Table from '../components/table';
import { useRouter } from 'next/router'






const Home: NextPage = () => {
  const router = useRouter()



  return (
    <div className='grid md:grid-cols-6 py-20 min-h-screen'>
      <Head>
        <title>Credit Card System</title>
        <meta name="description" content="Credit Card System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-10 col-span-4 col-start-2">
        <h1 className="text-xl md:text-4xl text-left font-bold ">Credit Card System</h1>

        {/*table */}
        <div className='space-y-8'>
          <div className='flex justify-between'>
            <h4 className="text-xl md:text-2xl text-left ">All Cards</h4>
            <button onClick={() => router.push('/add')} className='bg-black px-10 rounded py-2 text-white hover:bg-gray-800'>Add</button>
          </div>
          <hr />
          <Table />
        </div>
      </main>

    </div>
  )
}

export default Home
