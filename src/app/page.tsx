import Image from "next/image";

export default function Home() {
  return (
    <div
      className="px-2 sm:px-9 py-4 min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #040918 0%, #091540 100%)',
      }}
    >
      <div
        className="flex w-[100%] h-[50px] p-2 rounded-md flex-row justify-between"
        style={{ backgroundColor: 'hsl(226, 25%, 17%)' }}
      >
        <Image
          src="/assets/images/logo.svg"
          alt="page logo"
          className="object-contain"
          width={140}
          height={1}
        />
        <div
          className="w-[36px] h-[36px] rounded-md flex items-center justify-center"
          style={{ backgroundColor: 'hsl(225, 23%, 24%)' }}
        >
          <Image
            src="/assets/images/icon-sun.svg"
            alt="day mode"
            className="mx-auto"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="mt-7 mb-4 text-center">
        <h1 className="text-3xl font-medium mb-6 sm:float-left">Extensions List</h1>
        <div className="flex gap-2 justify-center sm:float-right">
          <button>
            <div
              className="inline rounded-3xl px-4 py-2"
              style={{ backgroundColor: 'hsl(225, 23%, 24%)' }}
            >
              <span>All</span>
            </div>
          </button>
          <button>
            <div
              className="inline rounded-3xl px-3 py-2"
              style={{ backgroundColor: 'hsl(225, 23%, 24%)' }}
            >
              <span>Active</span>
            </div>
          </button>
          <button>
            <div
              className="inline rounded-2xl px-3 py-2"
              style={{ backgroundColor: 'hsl(225, 23%, 24%)' }}
            >
              <span>Inactive</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
