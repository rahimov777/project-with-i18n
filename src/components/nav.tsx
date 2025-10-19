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

  const handleChange = (e) => {
    const newLocale = e.target.value;
    setValue(newLocale);

    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
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
            className="w-[100px] border-[1px] border-gray-300 p-[5px] rounded-[4px]"
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <AnimatedThemeToggler />
          <Menu className="text-amber-300" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
