"use client";
import React from "react";
import Link from "next/link";
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { navItems } from "@/constant";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto  p-4">
        <div className="flex items-center justify-between">
          {/* Left Section (Title) */}
          <div>
            <Image
              src="/logo.svg"
              width={100}
              height={200}
              alt="/logo"
              className="object-cover w-[150px]"
            />
          </div>

          {/* Center Section (Navigation Links) */}
          <div className="hidden md:flex rounded-3xl border-white border-2 p-2 items-center justify-center">
            <div className="flex items-center gap-4">
              {/* Navigation Links */}
              {navItems.map((item, index) => (
                <Link href={item.link} key={index} className="mr-4">
                  <h1 className="text-[16px] font-normal text-white hover:text-[#Afff03]">
                    {item.title}
                  </h1>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section (Button) */}
          <div className="flex ml-10 items-center gap-2 ">
            <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0xb4635f438f8bbf2028f5ab83061f0cae2c2221e5">
              <button className="border md:px-8 md:py-2  py-1 px-2 rounded-full border-0.30 bg-white text-[#232323]  ">
                XFERBOT
              </button>
            </Link>

            <div className="md:hidden flex  justify-end items-center">
              {toggle ? (
                <AiOutlineClose
                  className="text-2xl text-white cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <RiMenu5Line
                  size={30}
                  className="text-2xl cursor-pointer text-white"
                  onClick={() => setToggle(!toggle)}
                />
              )}

              {/* Mobile Menu */}
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {/* Mobile Navigation Links */}
                  {navItems.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-green-500" : "text-white"
                      } ${index === navItems.length - 1 ? "mb-0" : "mb-4"}`}
                    >
                      <a href={`${nav.link}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
