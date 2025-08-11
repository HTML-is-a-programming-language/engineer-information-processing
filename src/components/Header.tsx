"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <header className="max-w-screen-xl flex flex-wrap items-center justify-between gap-8 mx-auto p-4 bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 border-b">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32px" height="32px" className="fill-white dark:fill-gray-900">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20v-9l-4 1.125V20h4Zm0 0h8m-8 0V6.667M16 20v-9l4 1.125V20h-4Zm0 0V6.667M18 8l-6-4-6 4m5 1h2m-2 3h2" className="stroke-gray-500 dark:stroke-gray-400" />
                </svg>
                <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-gray-500 dark:text-gray-400">정보처리기사</h1>
            </Link>
            <nav className="flex flex-wrap items-center justify-between md:flex-grow gap-8">
                <div className="flex md:order-2 sm:gap-2 lg:gap-4 flex-grow">
                    <button
                        type="button"
                        aria-controls="navbar-search"
                        aria-expanded={searchOpen}
                        onClick={() => {
                            setSearchOpen(v => !v);
                            setNavOpen(false);
                            setSettingsOpen(false);
                        }}
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block flex-grow">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <button
                        data-collapse-toggle="navbar-nav"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-nav"
                        aria-expanded={navOpen}
                        onClick={() => {
                            setNavOpen(v => !v);
                            setSearchOpen(false);
                            setSettingsOpen(false);
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-settings"
                        aria-expanded={settingsOpen}
                        onClick={() => {
                            setSettingsOpen(v => !v);
                            setSearchOpen(false);
                            setNavOpen(false);
                        }}
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={[
                        "md:hidden absolute left-0 right-0 top-full z-40 mx-auto max-w-screen-xl p-4 origin-top transform-gpu transition duration-300",
                        searchOpen
                        ? "scale-y-100 opacity-100 pointer-events-auto"
                        : "scale-y-0 opacity-0 pointer-events-none"]
                        .join(" ")}
                    id="navbar-search"
                >
                    <div className="relative md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                </div>
                <div
                    className={[
                        "absolute left-0 right-0 top-full z-40 mx-auto max-w-screen-xl p-4 origin-top transform-gpu transition duration-300",
                        navOpen
                        ? "scale-y-100 opacity-100 pointer-events-auto"
                        : "scale-y-0 opacity-0 pointer-events-none",
                        "md:static md:scale-y-100 md:opacity-100 md:pointer-events-auto md:transform-none md:p-0 md:max-w-none md:w-auto"
                        ].join(" ")}
                    id="navbar-nav"
                >
                    <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">개념학습</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">기출문제</a>
                        </li>
                        {/* <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">오답노트</a>
                        </li> */}
                    </ul>
                </div>
                <div
                    id="navbar-settings"
                    className={[
                        "absolute right-0 top-full z-40 mx-auto p-4 origin-top transform-gpu transition duration-300",
                        settingsOpen
                        ? "scale-y-100 opacity-100 pointer-events-auto"
                        : "scale-y-0 opacity-0 pointer-events-none",
                    ].join(" ")}
                >
                    <div className="flex flex-col bg-gray-50 dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 rounded-lg">
                        <ThemeToggle></ThemeToggle>
                    </div>
                </div>
            </nav>
        </header>
    );
}
