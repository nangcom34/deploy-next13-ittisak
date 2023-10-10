"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main id="Profile">
      <section className="grid grid-cols-1 gap-5 w-full max-h-screen mx-auto my-5 lg:grid-cols-2">
        <aside className="col-span-1 flex flex-col items-start justify-center p-10 duration-500 lg:pl-36">
          <h2 className="text-xl md:text-2xl text-secondary-content font-medium lg:text-4xl">
            Web Developer <span className="animate-ping">💕</span>
          </h2>
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-bold text-primary-content mt-1 lg:text-6xl">
              Ittisak Thammasa
            </h3>
            <p className="text-base-content font-normal text-xs md:text-lg my-7 absolute top-0 -right-0 lg:text-xl md:top-4 lg:top-7">
              อิทธิศักดิ์ ธรรมสา
            </p>
          </div>
          <p className="text-base-content text-sm md:text-lg my-7 lg:text-2xl">
            มีความกระตือรือร้น มุ่งมั่นที่จะทำงานตั้งแต่ต้นจนจบ Project
            เรียนรู้และพัฒนาทักษะความสามารถอยู่เสมอ
          </p>
          <div className=" flex items-center justify-start space-x-5">
            <Link
              href="https://www.instagram.com/pong_neang/"
              target="_blank"
              className=" w-10 h-10 hover:scale-150 hover:duration-500"
            >
              <Image src={"/images/ig.png"} alt="ig" width={100} height={100} />
            </Link>
            <Link
              href="https://www.facebook.com/ittisak.thammasa"
              target="_blank"
              className=" w-10 h-10 hover:scale-150 hover:duration-500"
            >
              <Image
                src={"/images/facebook.png"}
                alt="fb"
                width={100}
                height={100}
              />
            </Link>
            <Link
              href="https://line.me/ti/p/nBAYQsC5OG?fbclid=IwAR0v8vEEquw0fMPivDBD6c2Eewp4QkMROYUwf2fXIdYe1TUxcJgtIzNZdLk"
              target="_blank"
              className=" w-10 h-10 hover:scale-150 hover:duration-500"
            >
              <Image
                src={"/images/line.png"}
                alt="line"
                width={100}
                height={100}
              />
            </Link>
            <Link
              href="mailto:worktoittisak38@gmail.com"
              className=" w-10 h-10 hover:scale-150 hover:duration-500"
            >
              <Image
                src={"/images/gmail.png"}
                alt="gmail"
                width={100}
                height={100}
              />
            </Link>
            <Link
              href="https://github.com/nangcom34"
              target="_blank"
              className=" w-12 h-12 hover:scale-150 hover:duration-500"
            >
              <Image
                src={"/images/tools/github.png"}
                alt="github"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </aside>
        <div className="col-span-1 flex flex-col items-start justify-center">
          <Image
            src={"/images/profile.png"}
            alt="profile"
            width={1600}
            height={1000}
            className=" scale-90 hover:-translate-y-4 hover:duration-1000 hover:scale-100"
          />
        </div>
      </section>
    </main>
  );
}
