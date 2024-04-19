import logo from "../logo.gif"; // Import the logo GIF instead of SVG
import "../App.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="App bg-white dark:bg-gray-900">
            <header className="App-header">
                {/* divide to 2 section on md upper and 1 section in md below */}
                <div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-2 md:px-4 min-h-screen mt-14 mt-sm-0 ">
                    <div className="flex justify-center items-center md:order-2">
                        <img
                            src={logo}
                            className="App-logo"
                            alt="logo"
                            id="logo"
                        />
                    </div>
                    <div className="text-xl flex justify-center flex-col text-black items-center text-justify md:order-1 md:p-10 dark:text-white">
                        {/* title */}
                        <div className="text-4xl font-bold text-center md:text-start mx-10 pb-10">
                            <h1>About this project</h1>
                        </div>
                        <p className="p-10 sm:p-5 text-black dark:text-white">
                            This React.js project is a versatile toolset encompassing three essential utilities:{" "}
                            <span className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm font-medium">
                                Todo List
                            </span>
                            ,{" "}
                            <span className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm font-medium">
                                Note
                            </span>
                            , and{" "}
                            <span className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm font-medium">
                                Expense Tracker
                            </span>
                            . While it may not achieve flawlessness, it serves as an excellent springboard for delving into React.js. This marks my inaugural journey with React.js, and I hope it provides you with as much enjoyment as it has afforded me. Should you encounter any glitches, don't hesitate to reach out; I'm committed to rectifying them promptly.
                        </p>
                        <div className="flex justify-center items-center pt-5">
                            <a href="https://www.linkedin.com/in/md-azharuddin-85742b221/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
                                    more about me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* tools */}
                <div className="container mx-auto px-0 md:px-4 py-10 my-10 bg-slate-300 rounded-md text-black dark:bg-gray-800 dark:text-white">
                    <div className="text-4xl font-bold text-center mx-10 pb-10">
                        <h1>Tools</h1>
                    </div>
                    <div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:px-4">
                        <Link
                            to="todo"
                            className="flex justify-center items-center hover:scale-105 transition-transform mx-4">
                            <div className="bg-white rounded-t-lg md:rounded-lg shadow-xl p-5 min-w-full dark:bg-gray-600">
                                <div className="flex justify-center items-center">
                                    <div className="bg-blue-500 rounded-full p-8">
                                        <i className="fas fa-clipboard-list text-white fa-4x mx-2 md:mx-4"></i>
                                    </div>
                                    <div className="flex flex-col justify-center items-center ml-5">
                                        <h1 className="text-2xl font-bold">
                                            Todo List
                                        </h1>
                                        <p className="text-sm text-gray-500 dark:text-white">
                                            Manage your daily activities
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link
                            to="note"
                            className="flex justify-center items-center hover:scale-105 transition-transform mx-4">
                            <div className="bg-white md:rounded-lg shadow-xl p-5 min-w-full dark:bg-gray-600">
                                <div className="flex justify-center items-center">
                                    <div className="bg-blue-500 rounded-full p-8">
                                        <i className="fas fa-sticky-note text-white fa-4x mx-1 md:mx-2"></i>
                                    </div>
                                    <div className="flex flex-col justify-center items-center  ml-5">
                                        <h1 className="text-2xl font-bold">
                                            Note
                                        </h1>
                                        <p className="text-sm text-gray-500 dark:text-white">
                                            Manage your notes with ease
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link
                            to="/expense-tracker"
                            className="flex justify-center items-center hover:scale-105 transition-transform mx-4 md:col-span-2 xl:col-span-1 md:mt-10 xl:mt-0">
                            <div className="bg-white rounded-b-lg md:rounded-lg shadow-xl p-5 min-w-full dark:bg-gray-600">
                                <div className="flex justify-center items-center">
                                    <div className="bg-blue-500 rounded-full p-8">
                                        <i className="fa-solid fa-coins text-white fa-4x"></i>
                                    </div>
                                    <div className="flex flex-col justify-center items-center ml-5 ">
                                        <h1 className="text-2xl font-bold">
                                            Expense Tracker
                                        </h1>
                                        <p className="text-sm text-gray-500 dark:text-white">
                                            Manage your expenses
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* contact */}
                <div className="container mx-auto px-0 md:px-4 py-10 md:mt-60 text-black gradient-gray dark:text-white">
                    <div className="text-4xl font-bold text-center mx-10 pb-10">
                        <h1>Contact me</h1>
                    </div>
                    <div className="container relative mx-auto px-4 bg-slate-300 pt-20 pb-32 dark:bg-gray-800 rounded-md shadow-xl">
                        <div className="icon pb-10">
                            <i className="fa-regular fa-address-book fa-6x text-blue-600 dark:text-white"></i>
                        </div>
                        <div className="desc py-4">
                            <p className="text-center text-xl text-black dark:text-white">
                                Reach out to me through email or connect via social media.
                            </p>
                        </div>
                        {/* email */}
                        <Button
                            icon="fa-solid fa-envelope"
                            link="mailto:azharsayzz@gmail.com?subject=Hello&body=Hello">
                            Email
                        </Button>
                        {/* github */}
                        <Button
                            icon="fa-brands fa-github"
                            link="https://github.com/bunnysayzz">
                            Github
                        </Button>
                        {/* linkedin */}
                        <Button
                            icon="fa-brands fa-linkedin"
                            link="https://www.linkedin.com/in/md-azharuddin-85742b221/">
                            Linkedin
                        </Button>
                        {/* instagram */}
                        <Button
                            icon="fa-brands fa-instagram"
                            link="https://instagram.com/bunnysayzzzzz">
                            Instagram
                        </Button>
                        {/* discord */}
                        <Button
                            icon="fa-brands fa-discord"
                            link="https://discordapp.com/users/bunnysayzz#0000">
                            Discord
                        </Button>
                    </div>
                </div>
                {/* quote */}
                <div className="container mx-auto px-2 md:px-4 py-10 my-10">
                    <div
                        className="flex flex-col items-center justify-center"
                        style={{ minHeight: "90vh" }}>
                        <div>
                            <figure className="max-w-screen-md mx-auto text-center">
                                <svg
                                    className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 14">
                                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl italic font-medium text-gray-500 dark:text-white">
                                        "Just like a fish in any waters, be it a pristine stream or a humble creek, as long as it swims onward, its journey will paint a portrait of beauty."
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                                            Azhar
                                        </cite>
                                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                                             Lovely Professional University
                                        </cite>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
