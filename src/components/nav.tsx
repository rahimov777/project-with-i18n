"use client";

import React, { useState } from "react";
import logo from "../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import kap from "../../public/kapital-logo.svg";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "use-intl";

const Navbar = ({ locale }: { locale: string }) => {
  const [value, setValue] = useState(locale);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newLocale: string = e.target.value;
    setValue(newLocale);

    const newPath: string = (pathname as string).replace(
      `/${locale}`,
      `/${newLocale}`,
    );
    router.push(newPath);
  };

  return (
    <>
      <nav className="flex justify-between mx-[20px] md:mx-[100px] items-center my-[20px]">
        <div>
          <Image className="md:block hidden" src={logo} alt="" />
          <Image className="md:hidden block" src={kap} alt="" />
        </div>

        <div className="hidden md:flex gap-[30px] font-semibold">
          <Link href={"/"}>{t("navbar.about")}</Link>
          <Link href={""}>{t("navbar.coverageMap")}</Link>
          <Link href={""}>{t("navbar.infrastructure")}</Link>
          <Link href={""}>{t("navbar.partners")} </Link>
          <Link href={"/news"}>{t("navbar.news")}</Link>
          <Link href={""}>{t("navbar.vacancies")}</Link>
        </div>

        <div className="flex gap-[10px]">
          <select
            value={locale}
            onChange={handleChange}
            className=" w-[90px] h-10 px-3 rounded-xl border border-gray-300 bg-white text-gray-800 dark:border-white/20 dark:bg-white/10 dark:text-white dark:backdrop-blur-md text-sm font-medium outline-none cursor-pointer transition-all duration-300 hover:border-gray-400 dark:hover:border-white/40 focus:border-gray-500 dark:focus:border-white/60 focus:ring-2 focus:ring-gray-200 dark:focus:ring-white/10"
          >
            <option
              value="ru"
              className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white"
            >
              RU
            </option>

            <option
              value="en"
              className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white"
            >
              EN
            </option>
          </select>
          <AnimatedThemeToggler />
          <Menu className="text-amber-300" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
