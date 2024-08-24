const Loading = () => {
  return (
    <div className="absolute mt-[-50px] ml-[-50px] w-[100px] h-[100px] left-2/4 top-2/4">
      <div className="flex flex-row gap-2">
        <div className="w-3 h-3 rounded-full bg-[#008ffb] animate-bounce"></div>
        <div className="w-3 h-3 rounded-full bg-[#008ffb] animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-3 h-3 rounded-full bg-[#008ffb] animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};
export default Loading;