const VideoIntro = () => {
  return (
    <div>
      <span className="text-white mt-3 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        DEVELOPER&apos;S POINT
      </span>
      <div className="flex justify-center items-center mt-3">
        <video width="900" height="600" controls className="mt-2">
          <source src="/videos/intro-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoIntro;
