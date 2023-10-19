import Link from "next/link";
import Header from "../app/components/Header";
import About from "./components/About";
import Slider from "./components/Slider";
import SkillDetails from "./components/SkillDetails";
import VideoIntro from "./components/VideoIntro";
import Credits from "./components/Credits";

export default function Home() {
  return (
    <main
      className="min-h-screen inset-0 bg-cover bg-center bg-no-repeat z-0 p-2"
      style={{ backgroundImage: 'url("/photos/main-theme.avif")' }}
    >
      <Header />

      <div className="flex mt-4 justify-center font-sans">
        <About />
      </div>

      <div className="flex justify-center mt-4">
        <Link
          href="/Resume_Sayan_Pramanick.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="bg-red-100 hover:bg-orange-100 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-end">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              View / Download Resume
            </span>
          </button>
        </Link>
      </div>

      <div className="flex justify-center mt-8">
        <Slider />
      </div>

      <div className="mt-8 ml-4 font-sans">
        <SkillDetails />
      </div>

      <div className="mt-8 ml-4 font-sans">
        <VideoIntro />
      </div>
      <div className="mt-8 ml-4 font-sans">
        <Credits />
      </div>
    </main>
  );
}
