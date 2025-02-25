import React from 'react'
import Link from 'next/link'
import { Github, Google } from './ui/svg'


const Form = ({ type, action }: { type: 'Sign In' | 'Sign Up', action: any }) => {
    return (
        <div>
            <div className="mt-10 mx-auto w-full max-w-md  p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-neutral-700">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Welcome to Dev_Nano</h5>
                </div>
                <form className="space-y-6 mt-3" action={action}>
                    <h5 className="text-md font-medium text-gray-900 dark:text-white">{type} to our platform</h5>
                    {type === "Sign Up" && (
                        <>
                            <div>
                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Dev" required />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input type="text" name="lastname" id="lastname" placeholder="Nano" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                        </>
                    )}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button type="submit" className="text-white bg-gradient-to-r from-blue-500  font-medium via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg text-sm p-6 text-center me-2 mb-2 w-full ">{type} your account</button>
                    {type === 'Sign Up' ? (
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">Already have an account? <Link href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link >
                        </div>
                    ) : (
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">Don't Have An Account yet? <Link href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Register</Link >
                        </div>
                    )
                    }
                    {type === 'Sign In' && (
                        <>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                        </>
                    )}
                </form>
                <form>
                    <button type="submit" className="text-white bg-gradient-to-r from-blue-500  font-medium inline-flex items-center via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg text-sm p-6 text-center me-2 mb-2 w-full ">
                        <Github />
                        <span>Github</span>
                    </button>
                </form>
                <form>
                    <button type="submit" className="text-white bg-gradient-to-r from-blue-500  font-medium inline-flex items-center via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg text-sm p-6 text-center me-2 mb-2 w-full ">
                        <Google />
                        <span>Google</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form
