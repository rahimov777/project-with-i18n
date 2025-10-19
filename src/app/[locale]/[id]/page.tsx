import { useTranslations } from "next-intl";
import Image from "next/image";
import img from '../../../../public/image 19 (1).png'
import img1 from '../../../../public/image 19 (2).png'
import img3 from '../../../../public/image 19 (3).png'
import img4 from '../../../../public/image (72).png'

export default function LearnPage() {
  const t = useTranslations("HomePage2.novos");
  return (
    <div className="p-6 dark:text-white dark:bg-gray-800">
      <Image
        src={img}
        alt="..."
        width={1300}
        height={630}
        className=" w-[90%] h-[630px] object-cover rounded-2xl shadow-xl mt-[80px] mx-auto transition duration-500 hover:scale-[1.02]"
      />

      <h1 className="font-bold text-center text-[#111827] text-[28px] mt-[60px]">
        {t("a58")}
      </h1>
      <hr className="bg-[#FFA900] w-[8%] ml-[46.5%] mt-[30px] h-[7px] rounded-2xl border-none " />

      <div className="ml-[3%] ">
        <h1 className="text-[#111827] font-bold text-[22px] mt-[20px]">
          {t("a64")}
        </h1>
        <h1 className="text-[#111827] w-[90%] text-[19px] mt-[15px] leading-8">
          {t("a61")}
        </h1>
        <h1 className="text-[#111827] font-bold w-[90%] mt-[25px] leading-8">
          {t("a62")}
        </h1>
        <h1 className="text-[#111827]  w-[95%] text-[19px] mt-[15px]  leading-8">
          {t("a63")}
        </h1>
        <h1 className="text-[#111827] font-bold  text-[25px] mt-[30px]">
          {t("a13")}
        </h1>

        <h1 className="text-[#111827] text-[19px] mt-[15px] ">{t("a65")}</h1>

        <h1 className="text-[#111827] font-bold mt-[30px] text-[25px]">
          {t("a15")}
        </h1>

        <h1 className="text-[#111827] text-[18px] mt-[10px] ">
          <b>1. </b>
          {t("a66")}
        </h1>
        <h1 className="text-[#111827]  text-[18px] mt-[5px]">
          <b>2. </b> {t("a67")}
        </h1>
        <h1 className="text-[#111827]  text-[18px] mt-[5px]">
          <b>3. </b>
          {t("a68")}
        </h1>

        <h1 className="text-[#111827] text-[19px] font-bold mt-[40px]">
          {t("a70")}
        </h1>

        <h1 className="text-center dark:text-white text-[#111827] font-bold text-[40px] pt-[50px]">
          {t("a69")}
        </h1>
        <hr className="bg-[#FFA900] w-[8%] ml-[46%] mt-[30px] h-[7px] rounded-2xl border-none " />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12 lg:mt-[50px] px-4 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20">
        <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg h-auto lg:h-[410px] shadow-2xl bg-gray-50 dark:bg-gray-700 rounded-2xl">
          <Image
            src={img1}
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
    </div>
  );
}
