"use client";

import "../../../src/app/globals.css";
import work from "../../../public/work.png";
import chairs from "../../../public/chairs.png";
import namedonm from "../../../public/namedonm.png";
import { MapPinCheck, UserCheck, BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import brands from "../../../public/brands.png";
import bottle from "../../../public/bottle.png";
import laptop from "../../../public/laptop.png";
import bread from "../../../public/bread.png";
import {
  FaClock,
  FaWarehouse,
  FaTruckMoving,
  FaUsers,
  FaHandshake,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot, FaMessage, FaTruckFast } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Contact from "@/components/contact";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./globals.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="">
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Swiper
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          loop={true}
          className="mySwiper absolute inset-0 z-0"
        >
          <SwiperSlide>
            <div className="bg bg-cover bg-center w-full h-full"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg2 bg-cover bg-center w-full h-full"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg3 bg-cover bg-center w-full h-full"></div>
          </SwiperSlide>
        </Swiper>

        <div className="absolute inset-0 z-10 text-white flex flex-col text-center justify-center items-center px-[20px] py-[50px]">
          <h2 className="text-[40px] sm:text-[60px] md:text-[90px] font-bold">
            «{t("hero.slogan")}»
          </h2>
          <h3 className="text-[18px] sm:text-[24px] md:text-[32px] mt-[10px]">
            {t("hero.subtitle")}
          </h3>

          <div className="flex sm:flex-row gap-[15px] sm:gap-[20px] justify-center my-[30px]">
            <a href="#contact">
              <button className="cursor-pointer w-[160px] sm:w-[177px] h-[48px] sm:h-[52px] bg-[#FFA900] text-white rounded-[100px]">
                {t("hero.becomePartner")}
              </button>
            </a>
            <button className="cursor-pointer w-[160px] sm:w-[177px] h-[48px] sm:h-[52px] border-[#FFA900] border-[1px] text-[#FFA900] rounded-[100px]">
              {t("hero.contactUs")}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-[80px] md:gap-[100px] sm:mx-[30px] md:mx-[50px] gap-[40px] items-center sm:items-start justify-center">
            <div className="flex items-center gap-[10px]">
              <h2 className="text-[40px] sm:text-[52px] font-bold">9500</h2>
              <div className="text-start">
                <p>{t("stats.totalClients")}</p>
                <p className="font-light text-[#9CA3AF] text-[12px]">
                  {t("stats.includingHoReCa")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[10px]">
              <h2 className="text-[40px] sm:text-[52px] font-bold">8250</h2>
              <div className="text-start">
                <h2>{t("stats.activeClients")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-center">
          <h2 className="font-bold text-[48px]">{t("navbar.about")}</h2>
          <hr className="text-[#FFA900] justify-self-center w-[100px] border-[2px]" />
          <p className="my-[40px] text-center text-[28px] whitespace-pre-line">
            {t("aboutSection.aboutUs")}
          </p>
        </div>
      </div>
      <div className="parent m-[60px]">
        <div className="div1">
          <h2 className="text-[28px] text-[#FFA900] font-bold">
            {t("aboutSection.value")}
          </h2>
          <div className="w-[630px] my-[10px] h-[240px] border-[1px] border-[#E5E7EB] rounded-t-2xl flex justify-center items-center">
            <p className="font-bold whitespace-pre-line">
              {t("aboutSection.values")}
            </p>
          </div>
        </div>
        <div className="div2">
          <h2 className="text-[28px] text-[#FFA900] font-bold">
            {t("aboutSection.goal")}
          </h2>
          <div className="w-[630px] my-[10px] h-[236px] border-[1px] border-[#E5E7EB] rounded-2xl flex justify-start px-[30px] items-center">
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[20px] items-center">
                <div className="w-[52px] h-[52px] bg-[#F4F4F5] flex justify-center items-center rounded-[16px]">
                  <MapPinCheck />
                </div>
                <h2 className="font-bold">{t("aboutSection.open")}</h2>
              </div>
              <div className="flex gap-[20px] items-center">
                <div className="w-[52px] h-[52px] bg-[#F4F4F5] flex justify-center items-center rounded-[16px]">
                  <BriefcaseBusiness />
                </div>
                <h2 className="font-bold">{t("aboutSection.ext")}</h2>
              </div>
              <div className="flex gap-[20px] items-center">
                <div className="w-[52px] h-[52px] bg-[#F4F4F5] flex justify-center items-center rounded-[16px]">
                  <UserCheck />
                </div>
                <h2 className="font-bold">{t("aboutSection.bust")}</h2>
              </div>
            </div>
          </div>
          <p className="mt-[20px] whitespace-pre-line">
            {t("aboutSection.goals")}
          </p>
        </div>
        <div className="div3">
          <Image src={work} alt="" />
        </div>
        <div className="div4">
          <Image src={chairs} alt="" />
        </div>
        <div className="div5">
          <Image className="ml-[80px] mt-[-20px]" src={namedonm} alt="" />
        </div>
      </div>
      <div className="bg-map p-[40px] mt-[-100px]">
        <div className="parent2">
          <div className="div6 p-[30px]  w-[506px] h-[173px] rounded-[28px] flex gap-[24px] bg-[#F9FAFB]">
            <div className="flex justify-center items-center w-[72px] h-[72px] rounded-[20px] bg-[#FFFFFF66]">
              <FaClock size={30} />
            </div>
            <div className="">
              <h2 className="font-bold text-[40px] text-[#111827] whitespace-pre-line">
                {t("coverage.years")}
              </h2>
              <p className="whitespace-pre-line">{t("coverage.ob")}</p>
            </div>
          </div>
          <div className="div7 w-[241px] h-[261px] bg-[#F9FAFB] rounded-[28px] p-[30px] ">
            <div className="flex justify-center items-center w-[72px] h-[72px] rounded-[20px] bg-[#FFFFFF66]">
              <FaUsers size={30} />
            </div>
            <h2 className="font-bold text-[40px] text-[#111827]">300</h2>
            <p className="whitespace-pre-line">{t("coverage.employees")}</p>
          </div>
          <div className="div8 w-[241px] h-[261px] bg-[#F9FAFB] rounded-[28px] ml-[-50px] p-[30px]">
            <div className="flex justify-center items-center w-[72px] h-[72px] rounded-[20px] bg-[#FFFFFF66]">
              <FaTruckFast size={30} />
            </div>
            <h2 className="font-bold text-[40px] text-[#111827]">
              {t("coverage.dailyDeliveries")}
            </h2>
            <p className="whitespace-pre-line">{t("coverage.tot")}</p>
          </div>
          <div className="div9 w-[790px] h-[515px] bg-[#F9FAFB] rounded-[28px]">
            <h2 className="text-[20px] text-[#111827] font-bold p-[20px] flex justify-center">
              {t("coverage.mainOffices.mainOffice")}
            </h2>
            <div className="flex gap-[14px] justify-self-center">
              <div className="flex text-center justify-center items-center w-[352px] h-[111px] bg-[#ffffff2c] rounded-[20px]">
                <div className="">
                  <div className="flex gap-1.5 items-center justify-center">
                    <FaLocationDot size={24} />
                    <h2 className="font-bold text-[20px] text-[#111827]">
                      {t("coverage.mainOffices.dushanbe")}
                    </h2>
                  </div>
                  <p>+992 88 888 0101</p>
                  <p>{t("coverage.mainOffices.ul")}</p>
                </div>
              </div>
              <div className="flex text-center justify-center items-center w-[352px] h-[111px] bg-[#ffffff2c] rounded-[20px]">
                <div className="">
                  <div className="flex gap-1.5 items-center justify-center">
                    <FaLocationDot size={24} />
                    <h2 className="font-bold text-[20px] text-[#111827]">
                      {t("coverage.mainOffices.khujand")}
                    </h2>
                  </div>
                  <p>+992 88 888 0101</p>
                  <p>{t("coverage.mainOffices.dis")}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[100px]">
              <div className="text-center">
                <h2 className="font-bold text-[#111827] ">
                  {t("coverage.mainOffices.filials")}
                </h2>
                <div className="flex gap-[30px]">
                  <div className="flex gap-[20px] mt-[30px]">
                    <div className="w-[122px] h-[40px] flex justify-center items-center bg-[#ffffff2c] rounded-[12px]">
                      <p>{t("coverage.branches.Tursunzade")}</p>
                    </div>
                  </div>
                  <div className="flex gap-[20px] mt-[30px]">
                    <div className="w-[122px] h-[40px] flex justify-center items-center bg-[#ffffff2c] rounded-[12px]">
                      <p>{t("coverage.branches.Istaravshan")}</p>
                    </div>
                  </div>
                  <div className="flex gap-[20px] mt-[30px]">
                    <div className="w-[122px] h-[40px] flex justify-center items-center bg-[#ffffff2c] rounded-[12px]">
                      <p>{t("coverage.branches.Panjakent")}</p>
                    </div>
                  </div>
                  <div className="flex gap-[20px] mt-[30px]">
                    <div className="w-[122px] h-[40px] flex justify-center items-center bg-[#ffffff2c] rounded-[12px]">
                      <p>{t("coverage.branches.Isfara")}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[30px] justify-self-center">
                  <div className="flex gap-[20px] mt-[30px]">
                    <div className="w-[122px] h-[40px] flex justify-center items-center bg-[#ffffff2c] rounded-[12px]">
                      <p>{t("coverage.branches.Bokhtar")}</p>
                    </div>
                  </div>
                  <div className="flex gap-[20px] mt-[30px]">
                    <div className="w-[122px] h-[40px] flex justify-center items-center bg-[#ffffff2c] rounded-[12px]">
                      <p>{t("coverage.branches.Vose")}</p>
                    </div>
                  </div>
                  <div className="flex gap-[20px] mt-[30px]">
                    <div className="w-[122px] h-[40px] flex justify-center items-center bg-[#ffffff2c] rounded-[12px]">
                      <p>{t("coverage.branches.Garm")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-self-center flex-col">
        <h2 className="text-[48px] text-[#111827] font-bold">
          {t("mapCoverage.mapTitle")}
        </h2>
        <hr className="w-[100px] ml-[140px] mt-[30px] border-[#FFA900] border-[3px]" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mx-[100px] my-[50px] rounded-2xl p-8">
        <div className="space-y-10 w-full md:w-1/2">
          <div>
            <h3 className="bg-linear-to-b text-[40px] from-[#E6E6E6] to-[#FFFFFF] bg-clip-text text-transparent text-xl font-semibold mb-2">
              {t("mapCoverage.soghd")}
            </h3>
            <div className="flex gap-10 text-2xl font-bold text-gray-900">
              <p className="text-[40px]">
                2170{" "}
                <span className="text-sm font-normal text-gray-500">
                  {t("mapCoverage.akb")}
                </span>
              </p>
              <p className="text-[40px]">
                2110{" "}
                <span className="text-sm font-normal text-gray-500">
                  {t("mapCoverage.okb")}
                </span>
              </p>
            </div>
            <div className="w-21 h-[2px] bg-orange-400 mt-3"></div>
          </div>

          <div>
            <h3 className="bg-linear-to-b text-[40px] from-[#E6E6E6] to-[#FFFFFF] bg-clip-text text-transparent text-xl font-semibold mb-2">
              {t("mapCoverage.rrp")}
            </h3>
            <div className="flex gap-10 text-2xl font-bold text-gray-900">
              <p className="text-[40px]">
                5860{" "}
                <span className="text-sm font-normal text-gray-500">
                  {t("mapCoverage.akb")}
                </span>
              </p>
              <p className="text-[40px]">
                6700{" "}
                <span className="text-sm font-normal text-gray-500">
                  {t("mapCoverage.okb")}
                </span>
              </p>
            </div>
            <div className="w-21 h-[2px] bg-orange-400 mt-3"></div>
          </div>

          <div>
            <h3 className="bg-linear-to-b text-[40px] from-[#E6E6E6] to-[#FFFFFF] bg-clip-text text-transparent text-xl font-semibold mb-2">
              {t("mapCoverage.gbao")}
            </h3>
            <div className="flex gap-10 text-2xl font-bold text-gray-900">
              <p className="text-[40px]">
                220{" "}
                <span className="text-sm font-normal text-gray-500">
                  {t("mapCoverage.akb")}
                </span>
              </p>
              <p className="text-[40px]">
                360{" "}
                <span className="text-sm font-normal text-gray-500">
                  {t("mapCoverage.okb")}
                </span>
              </p>
            </div>
            <div className="w-21 h-[2px] bg-orange-400 mt-3"></div>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/maptj.png"
            alt="Map of Tajikistan"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-self-center flex-col">
        <h2 className="text-[48px] text-[#111827] font-bold">
          {t("infrastructures.infrastructure")}
        </h2>
        <hr className="w-[100px] ml-[140px] mt-[30px] border-[#FFA900] border-[3px]" />
      </div>
      <div className="w-full flex flex-wrap justify-center gap-5 my-[60px]">
        <div className="w-[617px] h-[211px] bg-[#F5F5F5] rounded-[20px] flex flex-col justify-center items-center gap-2">
          <FaWarehouse className="text-[#FFA900] text-4xl" />
          <h2 className="text-[22px] font-bold text-[#1E293B]">
            15 000 {t("infrastructures.sq")}
          </h2>
          <p className="text-sm text-[#6B7280]">
            {t("infrastructures.warehouseArea")}
          </p>
        </div>

        <div className="w-[617px] h-[211px] bg-[#F5F5F5] rounded-[20px] flex flex-col justify-center items-center gap-2">
          <FaTruckMoving className="text-[#FFA900] text-4xl" />
          <h2 className="text-[22px] font-bold text-[#1E293B]">
            70 {t("infrastructures.vehicles")}
          </h2>
          <p className="text-sm text-[#6B7280]">{t("infrastructures.fleet")}</p>
        </div>
      </div>
      <div className="flex gap-[30px] justify-center">
        <div className="w-[395px] h-[120px] bg-[#F5F5F5] rounded-[20px] flex flex-col justify-center items-center gap-2">
          <FaUsers className="text-[#FFA900] text-4xl" />
          <h2 className="text-[22px] font-bold text-[#1E293B]">8 000+</h2>
          <p className="text-sm text-[#6B7280]">
            {t("infrastructures.clients")}
          </p>
        </div>

        <div className="w-[395px] h-[120px] bg-[#F5F5F5] rounded-[20px] flex flex-col justify-center items-center gap-2">
          <FaHandshake className="text-[#FFA900] text-4xl" />
          <h2 className="text-[22px] font-bold text-[#1E293B]">5+</h2>
          <p className="text-sm text-[#6B7280]">
            {t("infrastructures.exclusiveContracts")}
          </p>
        </div>

        <div className="w-[395px] h-[120px] bg-[#F5F5F5] rounded-[20px] flex flex-col justify-center items-center gap-2">
          <FaMapMarkedAlt className="text-[#FFA900] text-4xl" />
          <h2 className="text-[22px] font-bold text-[#1E293B]">47+</h2>
          <p className="text-sm text-[#6B7280]">
            {t("infrastructures.coveredCities")}
          </p>
        </div>
      </div>
      <div className="bg-[#0F1724] text-white rounded-2xl p-8 md:p-12 mx-4 md:mx-8 my-[40px]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("partners.partner")}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto my-4"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            {t("partners.description")}
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex gap-6 md:gap-10 flex-wrap justify-center items-center">
              <Image src={brands} alt="Бренды и клиенты" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-6 md:px-12 ">
        <section className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1724]">
            {t("newsSection.seeAll")}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto my-4"></div>

          <div className="mt-10 grid md:grid-cols-3 gap-6 justify-center">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden text-left hover:shadow-lg transition-all">
              <div className="relative w-full h-56">
                <Image
                  src={bottle}
                  alt="bottle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Title</h3>
                <p className="text-gray-500 mb-4 text-sm">
                  Egestas elit dui scelerisque ut eu purus aliquam <br /> vitae
                  habitasse.
                </p>
                <button className="flex items-center gap-2 text-[#FF9F0D] font-medium hover:gap-3 transition-all">
                  {t("newsSection.examples.0.readMore")} <FiArrowRight />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden text-left hover:shadow-lg transition-all">
              <div className="relative w-full h-56">
                <Image
                  src={laptop}
                  alt="laptop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Title</h3>
                <p className="text-gray-500 mb-4 text-sm">
                  Egestas elit dui scelerisque ut eu purus aliquam <br /> vitae
                  habitasse.
                </p>
                <button className="flex items-center gap-2 text-[#FF9F0D] font-medium hover:gap-3 transition-all">
                  {t("newsSection.examples.1.readMore")} <FiArrowRight />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden text-left hover:shadow-lg transition-all">
              <div className="relative w-full h-56">
                <Image src={bread} alt="bread" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Title</h3>
                <p className="text-gray-500 mb-4 text-sm">
                  Egestas elit dui scelerisque ut eu purus aliquam <br /> vitae
                  habitasse.
                </p>
                <button className="flex items-center gap-2 text-[#FF9F0D] font-medium hover:gap-3 transition-all">
                  {t("newsSection.examples.2.readMore")} <FiArrowRight />
                </button>
              </div>
            </div>
          </div>

          <button className="mt-10 bg-[#FF9F0D] hover:bg-[#e68c00] text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 mx-auto transition-colors">
            {t("newsSection.allNews")} <FiArrowRight />
          </button>
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1724]">
            {t("vacanciesSection.vacancy")}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto my-4"></div>

          <div className="mt-10 grid md:grid-cols-3 gap-6 justify-center">
            <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-all relative">
              <span className="absolute top-4 left-4 bg-[#0F1724] text-white text-xs font-medium px-3 py-1 rounded-full">
                {t("vacanciesSection.op1")}
              </span>
              <div className="flex justify-end items-center gap-2 text-gray-400 text-sm mb-8">
                <FaMapMarkerAlt />{" "}
                {t("vacanciesSection.withExperience.location")}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t("vacanciesSection.withExperience.position")}
              </h3>
              <p className="text-gray-500 mb-4 text-sm">
                {t("vacanciesSection.withExperience.description")}
              </p>
              <button className="flex items-center gap-2 text-[#FF9F0D] font-medium hover:gap-3 transition-all">
                {t("newsSection.examples.0.readMore")} <FiArrowRight />
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-all relative">
              <span className="absolute top-4 left-4 bg-[#0F1724] text-white text-xs font-medium px-3 py-1 rounded-full">
                {t("vacanciesSection.op2")}
              </span>
              <div className="flex justify-end items-center gap-2 text-gray-400 text-sm mb-8">
                <FaMapMarkerAlt /> {t("vacanciesSection.withoutExperience.location")}
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("vacanciesSection.withoutExperience.position")}</h3>
              <p className="text-gray-500 mb-4 text-sm">
                {t("vacanciesSection.withoutExperience.description")}
              </p>
              <button className="flex items-center gap-2 text-[#FF9F0D] font-medium hover:gap-3 transition-all">
                {t("newsSection.examples.0.readMore")} <FiArrowRight />
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-all relative">
              <span className="absolute top-4 left-4 bg-[#0F1724] text-white text-xs font-medium px-3 py-1 rounded-full">
                {t("vacanciesSection.op3")}
              </span>
              <div className="flex justify-end items-center gap-2 text-gray-400 text-sm mb-8">
                <FaMapMarkerAlt /> {t("vacanciesSection.supervisor.location")}
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("vacanciesSection.supervisor.position")}</h3>
              <p className="text-gray-500 mb-4 text-sm">
                {t("vacanciesSection.supervisor.description")}
              </p>
              <button className="flex items-center gap-2 text-[#FF9F0D] font-medium hover:gap-3 transition-all">
                {t("newsSection.examples.0.readMore")} <FiArrowRight />
              </button>
            </div>
          </div>

          <button className="mt-10 bg-[#FF9F0D] hover:bg-[#e68c00] text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 mx-auto transition-colors">
            Все вакансии <FiArrowRight />
          </button>
        </section>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </section>
  );
};

export default Home;
