import { ArrowRightIcon, FolderIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <>
      <div className="bg-white px-72 flex items-center justify-center min-h-screen">
        <div className="w-full shadow-xl">
          <div className="bg-zinc-700 px-1 py-3 rounded-t-lg grid grid-cols-3">
            <div className="flex flex-row gap-x-1 mx-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>

            <div className="mx-auto flex items-center gap-x-2">
              <FolderIcon className="w-6 h-6 text-sky-400" />
              <span className="text-zinc-300">custom-bash -- arch@arch</span>
            </div>
          </div>

          <div className="bg-black p-5 rounded-b-lg h-80">
            <div className="flex flex-row gap-x-5 items-center">
              <ArrowRightIcon className="w-4 h-4 text-green-500" />
              <div className="flex flex-row items-center gap-x-2">
                <span className="text-green-500 font-bold text-lg">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <span className="text-blue-500 font-bold text-xl">~</span>
                <input
                  type="text"
                  autoFocus
                  className="bg-transparent border-none text-white active:border-none focus:border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
