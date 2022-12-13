import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useReducer, useState } from 'react';
import { toast } from "react-toastify";



const formReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}



const Add: NextPage = () => {
    const router = useRouter()
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);


    const createCard = async (event: any) => {
        try {
            setSubmitting(true)
            event.preventDefault();
            const { status } = await axios.post("http://localhost:5000/card", formData)


            if (status == 201) {
                event.target.reset();
                setSubmitting(false)
                router.push('/')
            }

        } catch (error) {
            toast("Invalid Card", { hideProgressBar: true, autoClose: 2000, type: 'error' })
            setSubmitting(false)
        }
    }

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
                        <h4 className="text-xl md:text-2xl text-left ">Add Card</h4>
                    </div>
                    <hr />
                    <div className='container mx-auto flex justify-between py-5'>
                        <div className='flex w-full gap-3, py-5 justify-center'>
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
                                <button disabled={submitting} type="submit" className=' bg-gray-400 text-white text-center px-4 py-2 w-full  rounded-md hover:bg-gray-50 hover:border-black-500 hover:text-gray-500' >Add</button>


                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Add
