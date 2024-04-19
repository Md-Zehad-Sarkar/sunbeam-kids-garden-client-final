const LoadingPage = () => {
  return (
    <div className="mt-10">
      <p className="flex justify-center items-center text-lg">
        <span className="loading loading-ring loading-xs "></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </p>
    </div>
  );
};

export default LoadingPage;
