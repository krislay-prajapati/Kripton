import Image from "next/image";

export default function Home() {
  return (
    <div className="z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      <div className="flex flex-col justify-center items-center my-5">
        <Image src="/hero.svg" alt="Hero section" height={500} width={500} />
        <h1 className="z-20 mt-5 text-6xl text-center font-extrabold bg-clip-text text-transparent bg-linear-to-r from-rose-500 via-red-500 to-pink-500 dark:from-rose-400 dark:via-red-400">
          Vibe Code With Intelligence
        </h1>
      </div>
    </div>
  );
}
