import logo from "../logo.svg";
import "../App.css";

function About() {
    return (
        <div className="container p-10 mx-auto min-h-screen flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 ">
                {/* about */}
                <div className="text-4xl font-bold text-center mx-10 text-black dark:text-white">
                    <h1>About this project</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center items-center md:order-2">
                    <img
                        src={logo}
                        className="App-logo w-full object-contain"
                        alt="logo"
                    />
                </div>
                <div className="text-xl flex justify-center flex-col items-center text-justify md:order-1 md:p-10 ">
                    <p className="text-black dark:text-white">
                        Welcome to my React.js journey! This app, born from a desire to organize my daily tasks, is a humble creation that reflects my initiation into the world of React.js. While it may not boast perfection, it serves as a testament to my growth and exploration in this technology. Through the process of building this todo list app, I've delved into the depths of React hooks, navigated the twists of React Router, and emerged with a newfound appreciation for the power of web development. Join me on this adventure as I continue to refine my skills and expand my horizons. Curious to peek under the hood? Dive into the source code on my GitHub page!
                    </p>
                    <div className="flex justify-center items-center pt-5">
                        <a href="https://github.com/bunnysayzz/my-daily-planner">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all">
                                <i className="fa-brands fa-github text-white fa-2x"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;
