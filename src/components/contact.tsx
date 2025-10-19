import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import mapLocation from "../../public/mapLocation.png";
import { useTranslations } from "use-intl";

const Contact = () => {
  const t = useTranslations("HomePage.contactForm");

  return (
    <div className="p-[20px] md:p-[30px] w-full max-w-[1400px] mx-auto bg-[#E5E7EB] rounded-[28px] flex flex-col md:flex-row justify-center items-center md:justify-between gap-[40px] md:gap-[200px]">
      <div>
        <h2 className="font-bold text-[32px] md:text-[48px] text-[#111827] text-center md:text-left">
          {t("becomePartner")}
        </h2>

        <div className="flex flex-col gap-[20px] my-[10px]">
          <input
            type="text"
            className="w-full md:w-[460px] rounded-[20px] h-[56px] bg-[#FFFFFF] outline-none p-[20px]"
            placeholder={t("name")}
          />
          <input
            type="text"
            className="w-full md:w-[460px] rounded-[20px] h-[56px] bg-[#FFFFFF] outline-none p-[20px]"
            placeholder={t("company")}
          />
          <div className="flex flex-col md:flex-row gap-[20px]">
            <input
              type="email"
              className="w-full md:w-[220px] rounded-[20px] h-[56px] bg-[#FFFFFF] outline-none p-[20px]"
              placeholder={t("email")}
            />
            <input
              type="text"
              className="w-full md:w-[220px] rounded-[20px] h-[56px] bg-[#FFFFFF] outline-none p-[20px]"
              placeholder={t("phone")}
            />
          </div>
          <input
            type="file"
            className="w-full md:w-[460px] rounded-[20px] h-[56px] bg-[#FFFFFF] outline-none p-[20px]"
          />
          <button className="w-full md:w-[460px] rounded-[100px] h-[56px] bg-[#1E293B] text-white font-bold hover:bg-[#0F172A] transition">
            {t("send")}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[20px]">
        <Image
          src={mapLocation}
          alt=""
          className="w-full max-w-[700px] h-auto rounded-[16px]"
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-[15px]">
          <div className="w-full md:w-[330px] h-[64px] bg-[#F4F4F5] flex gap-[10px] justify-center items-center rounded-[16px]">
            <MdEmail size={23} className="text-[#0F1724]" />
            <h2 className="font-bold text-[#0F1724]">contact@company.com</h2>
          </div>
          <div className="w-full md:w-[330px] h-[64px] bg-[#F4F4F5] flex gap-[10px] justify-center items-center rounded-[16px]">
            <FaPhone size={23} className="text-[#0F1724]" />
            <h2 className="font-bold text-[#0F1724]">+992 88 888 0101</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
