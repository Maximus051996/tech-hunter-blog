const Credits = () => {
  return (
    <div className="flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 p-3 mb-2 rounded">
      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
          </span>
        </div>
        <h5 className="mb-6 font-bold text-primary">3</h5>
        <h6 className="mb-0 dark:text-neutral-50 font-bold">
          Languages Known - Bengali | Hindi | English
        </h6>
        <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
      </div>
      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>
        </div>
        <h5 className="mb-6 font-bold text-primary">India</h5>
        <h6 className="mb-0 font-normal dark:text-neutral-50">Kolkata</h6>
        <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
      </div>
      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </span>
        </div>
        <h5 className="mb-6 font-bold text-primary">4.3+</h5>
        <h6 className="mb-0 font-normal dark:text-neutral-50">
          Full Stack Developer
        </h6>
        <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
      </div>
    </div>
  );
};

export default Credits;
