// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div className="flex -space-x-2 overflow-hidden items-center justify-center">
        <img
          className="h-20 w-20 rounded-full"
          src="https://media.licdn.com/dms/image/D4E03AQHTpMN0-afb3g/profile-displayphoto-shrink_800_800/0/1693189891443?e=1710374400&v=beta&t=k2vGFC7CH9yE_xsd42Cs2Gn4tKfWqNbOyYekGLIhCzM"
          alt=""
        />
      </div>
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        John Alexander Gil
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Front-end developer with experience in React, React Native and Flutter.I
        have a solid command of HTML, CSS and JavaScript, and extensive
        experience in web and mobile application development. I am motivated by
        continuous learning.
      </p>
    </div>
  );
}

export default App;
