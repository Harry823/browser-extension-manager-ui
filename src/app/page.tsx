import ExtensionList from '@/components/ExtensionList';
import data from './data.json';
import Image from "next/image";
import { Extension } from '@/types/extension';

export default function Home() {
  const extensionData = data satisfies Extension[];

  return (
    <div
      className="px-3 lg:px-[146px] py-4 min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #040918 0%, #091540 100%)',
      }}
    >
      <div
        className="flex w-[100%] p-2 rounded-md justify-between"
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
          className="w-[36px] h-[36px] rounded-md flex items-center justify-center relative"
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
      <ExtensionList extensionData={extensionData} />
    </div>
  );
}
