"use client"
import { useState } from 'react';

import Link from 'next/link'

export default function App() {
    const [data, setData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleRegistration = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log(data);
    };

    // Destructure data
    const { ...allData } = data;

    // Disable submit button until all fields are filled in
    const canSubmit = [...Object.values(allData)].every(Boolean);

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="flex w-full flex-col items-center py-10 sm:justify-center">
                <div className="w-full max-w-sm rounded-md  bg-white px-6 py-6 shadow-md dark:bg-black-5 sm:rounded-lg">
                    <form
                        action=""
                        onSubmit={handleRegistration}
                        className="group"
                    >
                        <div>
                            <label
                                htmlFor="fullName"
                                className="mb-2 block text-sm font-medium text-black-80 dark:text-white"
                            >
                                Full Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    className="block w-full rounded-lg border border-black-60 bg-gray-50 p-2.5 text-sm text-black-80 placeholder-black dark:border-black-80 dark:bg-black-5 dark:text-white dark:placeholder-black-40 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-lgreen"
                                    pattern="[0-9a-zA-Z ]{6,}"
                                    required
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            fullName: e.target.value
                                        });
                                    }}
                                />
                                <span className="mt-1 hidden text-sm text-red-400">
                                    Full name must be at least 6 characters long
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-black-80 dark:text-white"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="block w-full rounded-lg border border-black-60 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-purple-500 focus:ring-purple-500 dark:border-black-80 bg-black-5 dark:text-white dark:placeholder-black-40 dark:focus:border-purple-500 dark:focus:ring-purple-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-lgreen"
                                    autoComplete="off"
                                    required
                                    pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            email: e.target.value
                                        });
                                    }}
                                />
                                <span className="mt-1 hidden text-sm text-red-400">
                                    Please enter a valid email address.{' '}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            
                        </div>

                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-black-80 dark:text-white"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    required
                                    pattern="[0-9a-zA-Z]{8,}"
                                    className="block w-full rounded-lg border border-black-100 bg-gray-50 p-2.5 text-sm text-black-60 placeholder-gray-300 focus:border-purple-500 focus:ring-purple-500 dark:border-black-100 bg-black-5 dark:text-white dark:placeholder-black-40 dark:focus:border-purple-500 dark:focus:ring-purple-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-lgreen"
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            password: e.target.value
                                        });
                                    }}
                                />
                                <span className="mt-1 hidden text-sm text-red-400">
                                    Password must be at least 8 characters.{' '}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="mb-2 block text-sm font-medium text-black-80 dark:text-white"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Confirm password"
                                    autoComplete="off"
                                    required
                                    pattern="[0-9a-zA-Z]{8,}"
                                    className="block w-full rounded-lg border border-black-80 bg-gray-50 p-2.5 text-sm text-black-60 placeholder-gray-300  dark:border-black-80 bg-black-5 dark:text-white dark:placeholder-black-40 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-lgreen"
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            password: e.target.value
                                        });
                                    }}
                                />
                                <span className="mt-1 hidden text-sm text-red-400">
                                    Password must be at least 8 characters.{' '}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <button
                                type="submit"
                                disabled={!canSubmit}
                                className="mt-2 w-full rounded-lg bg-lgreen px-5 py-3 text-center text-sm font-medium dark:text-white-100 hover:bg-lgreen-hover focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:text-black-20 group-invalid:pointer-events-none group-invalid:bg-black-10 group-invalid:text-gray-400 group-invalid:opacity-70"
                            >
                                Create account
                            </button>
                        </div>
                    </form>
                    <div className="text-sm mt-4 text-black-40 dark:text-black-40 text-center">
                        Already have an account?{' '}
                        <span>
                            <Link
                                className="
                                text-lgreen 
                                hover:text-lgreen-hover 
                                hover:underline 
                                dark:text-lgreen 
                                dark:hover:text-lgreen-hover"
                                href="/auth/sign-in"
                            >
                                Sign In instead
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
