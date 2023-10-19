import Link from "next/link";
import { keys } from "@/Keydetails";

const SkillDetails = () => {
  return (
    <div>
      <span className="text-white mt-3 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        KEY COMPETENCIES
      </span>
      <div className="flex flex-row gap-6 flex-wrap grid-cols-3 sm:grid-cols-2 lg:grid-cols-1">
        {keys.map((key, index) => (
          <div
            className="max-w-sm  p-2 mt-4 bg-white border border-gray-200 rounded-lg"
            key={index}
          >
            <a href={key.src}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {key.alt}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {key.data}
            </p>
            <Link href={key.src} rel="noopener noreferrer" target="_blank">
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDetails;
