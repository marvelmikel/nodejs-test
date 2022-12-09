import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useReducer, useState } from 'react';
import { FaCcMastercard } from 'react-icons/fa';
import Table from '../components/table';


const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}



const Home: NextPage = () => {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [trigger, setTrigger] = useState(0);


  const createCard = async (event: any) => {
    try {
      setSubmitting(true)
      event.preventDefault();
      const { data, statusText } = await axios.post("http://localhost:8082/card", formData)

      if (statusText == "OK") {
        event.target.reset();
        setTrigger(1)
      }

    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false)
      setTrigger(0)
    }
  }

  return (
    <div className='px-10'>
      <Head>
        <title>Credit Card System</title>
        <meta name="description" content="Credit Card System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-left font-bold py-10">Credit Card System</h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className='left flex gap-3, py-5'>
            {/*table */}
            <form className='gap-4' onSubmit={createCard}>
              <div className='input-type'>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Name
                  </span>
                  <input type="text" required name="name" onChange={setFormData} size={50} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John" />
                </label>
                <br />
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Card Number
                  </span>
                  <input type="text" required name="cardNumber" onChange={setFormData} size={50} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Card Number" />
                </label>
                <br />
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Limit
                  </span>
                  <input type="text" required name="limit" onChange={setFormData} size={50} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Limit" />
                </label>
              </div>

              <br />
              <input type="submit" value="Add" className='flex bg-gray-400 text-white px-4 py-2  rounded-md hover:bg-gray-50 hover:border-black-500 hover:text-gray-500' />


            </form>
          </div>
        </div>
        {/*table */}
        <h4 className="text-xl md:text-2xl text-left  py-10">Existing Cards</h4>
        <Table trigger={trigger} />
      </main>

    </div>
  )
}

export default Home
