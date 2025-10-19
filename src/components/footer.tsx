import React from "react";
import kap from "../../public/kapital-logo.svg";
import tg from "../../public/tg.svg";
import whatsapp from "../../public/whatsapp.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {

  const t = useTranslations("HomePage.footer");

  return (
    <>
      <footer className="p-[30px] md:p-[70px]  w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] mx-[10px] md:mx-[20px]">
          <div>
            <Image
              src={kap}
              alt="Kapital-T logo"
              className="w-[140px] md:w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-[15px] md:gap-[30px] font-semibold text-center md:text-left">
            <Link href={""}>{t("navigation.0")}</Link>
            <Link href={""}>{t("navigation.1")}</Link>
            <Link href={""}>{t("navigation.2")}</Link>
            <Link href={""}>{t("navigation.3")}</Link>
            <Link href={""}>{t("navigation.4")}</Link>
            <Link href={""}>{t("navigation.5")}</Link>
          </div>

          <div className="flex gap-[15px] md:gap-[20px]">
            <Image src={tg} alt="Telegram" className="w-[28px] h-[28px]" />
            <Image
              src={whatsapp}
              alt="WhatsApp"
              className="w-[28px] h-[28px]"
            />
          </div>
        </div>

        <hr className="text-[#E5E7EB] mt-[30px] md:mt-[40px] w-full md:w-[1320px] mx-auto" />

        <h2 className="text-[#9CA3AF] flex justify-center text-center mt-[40px] md:mt-[60px] text-[14px] md:text-[16px]">
          {t("copyright")}
        </h2>
      </footer>
    </>
  );
};

export default Footer;
