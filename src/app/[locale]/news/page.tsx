"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import img from '../../../../public/image 19 (1).png'
import img2 from '../../../../public/image 19 (2).png'
import img3 from '../../../../public/image 19 (3).png'
import img4 from '../../../../public/image (72).png'
import img5 from '../../../../public/image (73).png'
import img6 from '../../../../public/image (74).png'
import img7 from '../../../../public/image (75).png'

export default function News() {
  const t = useTranslations("HomePage2.novos");
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <h1 className="text-center  dark:text-white text-[#111827] font-bold text-2xl md:text-3xl lg:text-[40px] pt-12 md:pt-16 lg:pt-[90px] px-4">
        {t("a60")}
      </h1>
      <hr className="bg-[#FFA900] w-20 md:w-24 lg:w-[8%] mx-auto mt-6 md:mt-7 lg:mt-[30px] h-[7px] rounded-2xl border-none " />

      <div className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-0 mt-8 md:mt-10 lg:mt-[50px] px-4 md:px-8 lg:px-0">
        <div className="w-full lg:w-[44%]">
          <h1 className="font-bold text-[#111827] dark:text-white text-xl md:text-2xl lg:text-[28px] mt-3 md:mt-4 lg:mt-[14px]">
            {t("a58")}
          </h1>
          <h1 className="text-[#4B5563] dark:text-gray-300 leading-6 md:leading-7 mt-4 md:mt-5 lg:mt-[20px]">
            {t("a59")}
          </h1>
          <Link href={"/learn"}>
            <button className="text-[#FFA900] font-bold mt-3 md:mt-4 lg:mt-[15px] ml-1 lg:ml-[5px]">
              {t("a49")}
            </button>
          </Link>
        </div>

        <div className="transform transition duration-500 hover:scale-105 hover:shadow-lg w-full lg:w-auto">
          <Image
            width={500}
            height={500}
            className="w-full lg:w-[700px] rounded-lg"
            alt="...."
            src={img}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-12 md:mt-16 lg:mt-[100px] px-4 md:px-8 lg:px-12">
        <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg h-auto lg:h-[410px] shadow-2xl bg-gray-50 dark:bg-gray-700 rounded-2xl">
          <Image
            src={img2}
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-2xl h-48 md:h-56 lg:h-[250px] w-full object-cover"
          />

          <h1 className="text-[#111827] dark:text-white font-bold text-lg md:text-xl mt-3 md:mt-4 lg:mt-[10px] mx-3 lg:ml-[10px]">
            {t("a47")}
          </h1>
          <h1 className="text-[#4B5563] dark:text-gray-300 mx-3 lg:ml-[10px] mt-2 md:mt-3 lg:mt-[10px] leading-6 md:leading-7">
            {t("a48")}
          </h1>
          <button className="text-[#FFA900] mx-3 lg:ml-[15px] mt-2 md:mt-3 lg:mt-[10px] mb-4">
            {t("a49")}
          </button>
        </div>

        <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg h-auto lg:h-[410px] shadow-2xl bg-gray-50 dark:bg-gray-700 rounded-2xl">
          <Image
            src={img3}
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-2xl h-48 md:h-56 lg:h-[250px] w-full object-cover"
          />

          <h1 className="text-[#111827] dark:text-white font-bold text-lg md:text-xl mt-3 md:mt-4 lg:mt-[10px] mx-3 lg:ml-[10px]">
            {t("a47")}
          </h1>
          <h1 className="text-[#4B5563] dark:text-gray-300 mx-3 lg:ml-[10px] mt-2 md:mt-3 lg:mt-[10px] leading-6 md:leading-7">
            {t("a48")}
          </h1>
          <button className="text-[#FFA900] mx-3 lg:ml-[15px] mt-2 md:mt-3 lg:mt-[10px] mb-4">
            {t("a49")}
          </button>
        </div>

        <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg h-auto lg:h-[410px] shadow-2xl bg-gray-50 dark:bg-gray-700 rounded-2xl">
          <Image
            src={img4}
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-2xl h-48 md:h-56 lg:h-[250px] w-full object-cover"
          />

          <h1 className="text-[#111827] dark:text-white font-bold text-lg md:text-xl mt-3 md:mt-4 lg:mt-[10px] mx-3 lg:ml-[10px]">
            {t("a47")}
          </h1>
          <h1 className="text-[#4B5563] dark:text-gray-300 mx-3 lg:ml-[10px] mt-2 md:mt-3 lg:mt-[10px] leading-6 md:leading-7">
            {t("a48")}
          </h1>
          <button className="text-[#FFA900] mx-3 lg:ml-[15px] mt-2 md:mt-3 lg:mt-[10px] mb-4">
            {t("a49")}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12 lg:mt-[50px] px-4 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20">
        <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg h-auto lg:h-[410px] shadow-2xl bg-gray-50 dark:bg-gray-700 rounded-2xl">
          <Image
            src={img5}
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-2xl h-48 md:h-56 lg:h-[250px] w-full object-cover"
          />

          <h1 className="text-[#111827] dark:text-white font-bold text-lg md:text-xl mt-3 md:mt-4 lg:mt-[10px] mx-3 lg:ml-[10px]">
            {t("a47")}
          </h1>
          <h1 className="text-[#4B5563] dark:text-gray-300 mx-3 lg:ml-[10px] mt-2 md:mt-3 lg:mt-[10px] leading-6 md:leading-7">
            {t("a48")}
          </h1>
          <button className="text-[#FFA900] mx-3 lg:ml-[15px] mt-2 md:mt-3 lg:mt-[10px] mb-4">
            {t("a49")}
          </button>
        </div>

        <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg h-auto lg:h-[410px] shadow-2xl bg-gray-50 dark:bg-gray-700 rounded-2xl">
          <Image
            src={img6}
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-2xl h-48 md:h-56 lg:h-[250px] w-full object-cover"
          />

          <h1 className="text-[#111827] dark:text-white font-bold text-lg md:text-xl mt-3 md:mt-4 lg:mt-[10px] mx-3 lg:ml-[10px]">
            {t("a47")}
          </h1>
          <h1 className="text-[#4B5563] dark:text-gray-300 mx-3 lg:ml-[10px] mt-2 md:mt-3 lg:mt-[10px] leading-6 md:leading-7">
            {t("a48")}
          </h1>
          <button className="text-[#FFA900] mx-3 lg:ml-[15px] mt-2 md:mt-3 lg:mt-[10px] mb-4">
            {t("a49")}
          </button>
        </div>

        <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg h-auto lg:h-[410px] shadow-2xl bg-gray-50 dark:bg-gray-700 rounded-2xl">
          <Image
            src={img7}
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-2xl h-48 md:h-56 lg:h-[250px] w-full object-cover"
          />

          <h1 className="text-[#111827] dark:text-white font-bold text-lg md:text-xl mt-3 md:mt-4 lg:mt-[10px] mx-3 lg:ml-[10px]">
            {t("a47")}
          </h1>
          <h1 className="text-[#4B5563] dark:text-gray-300 mx-3 lg:ml-[10px] mt-2 md:mt-3 lg:mt-[10px] leading-6 md:leading-7">
            {t("a48")}
          </h1>
          <button className="text-[#FFA900] mx-3 lg:ml-[15px] mt-2 md:mt-3 lg:mt-[10px] mb-4">
            {t("a49")}
          </button>
        </div>
      </div>
    </div>
  );
}
