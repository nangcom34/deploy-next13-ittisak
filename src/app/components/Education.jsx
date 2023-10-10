"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Education() {
  return (
    <main id="Education">
      <section className="grid grid-cols-3 gap-5 w-full max-h-screen mx-auto my-5 ">
        <div className="col-span-1 flex flex-col items-end justify-center">
          <Image
            src={"/images/p.png"}
            alt="p"
            width={1600}
            height={1000}
            className=" max-w-[20vw] scale-90 hover:-translate-y-4 hover:duration-1000 hover:scale-100"
          />
        </div>
        <aside className="col-span-2 flex flex-col items-center justify-center p-10 duration-500 lg:pl-36">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-content mt-1 lg:text-6xl">
            การศีกษา<span className="animate-ping">🏫</span>
          </h2>
          
        </aside>
      </section>

      <section className="grid grid-cols-1 w-full h-auto mx-auto -space-y-10">

        <aside className="col-span-1 flex flex-col items-center justify-center p-10 w-full duration-500">
          <main
            className="relative block overflow-hidden rounded-lg shadow-md shadow-base-content w-full max-w-screen-xl"
          >
            <div className="flex justify-between items-center gap-4 bg-accent">
              <div className="my-5 ml-5 grid grid-cols-2">
                <h3 className="text-md font-bold text-primary-content md:text-2xl lg:text-4xl col-span-2">
                มหาวิทยาลัยราชภัฏสวนสุนันทา

                </h3>

                <p className="mt-2 text-sm font-medium text-accent-content col-span-1 md:text-xl lg:text-2xl">
                วิทยาการคอมพิวเตอร์


                </p>
                <p className="mt-2 text-sm font-medium text-accent-content text-right col-span-1 md:text-xl lg:text-2xl">
                2015 - 2019
                </p>
              </div>

              <div className="sm:block sm:shrink-0 my-5 mr-5">
                <Image
                  src={"/images/ssru.jpg"}
                  alt="ssru"
                  width={400}
                  height={400}
                  className="h-20 w-20 lg:h-32 lg:w-32 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className=" mt-4 ml-8 mr-8 space-y-5">
              <p className="w-full text-sm text-base-content md:text-md lg:text-lg">
                ✨ ศึกษาวิชาพื้นฐาน เช่น Data Structure, Algorithms, Computer Architecture, Database Management, Computer Network
              </p>
              <p className="w-full text-sm text-base-content md:text-md lg:text-lg">
                ✨ ศึกษาภาษาโปรแกรม เช่น C, C++, Java, PHP, Python, Html, CSS, Javascript, SQL และ AI, Data Analysis
              </p>
              <p className="w-full text-sm text-base-content md:text-md lg:text-lg">
                ✨  ได้เรียนหลักสูตร Full Stack Development และทำ Final project จบการศึกษา
              </p>
            </div>

            <div className="flex items-center justify-end m-5">
              <Link href='https://ssru.ac.th/' target="_blank" className="btn btn-accent">เข้าชมเว็บไซต์</Link>
            </div>
          </main>
        </aside>

        <aside className="col-span-1 flex flex-col items-center justify-center p-10 w-full duration-500">
          <main
            className="relative block overflow-hidden rounded-lg shadow-md shadow-base-content w-full max-w-screen-xl"
          >
            <div className="flex justify-between items-center gap-4 bg-accent">
              <div className="my-5 ml-5 grid grid-cols-2">
                <h3 className="text-md font-bold text-primary-content md:text-2xl lg:text-4xl col-span-2">
                วิทยาลัยการอาชีพนครปฐม

                </h3>

                <p className="mt-2 text-sm font-medium text-accent-content col-span-1 md:text-xl lg:text-2xl">
                  คอมพิวเตอร์ธุรกิจ
                </p>
                <p className="mt-2 text-sm font-medium text-accent-content text-right col-span-1 md:text-xl lg:text-2xl">
                  2012 - 2015
                </p>
              </div>

              <div className="sm:block sm:shrink-0 my-5 mr-5">
                <Image
                  src={"/images/spn.png"}
                  alt="spn"
                  width={400}
                  height={400}
                  className="h-20 w-20 lg:h-32 lg:w-32 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4 ml-8 mr-8 space-y-5">
              <p className="w-full text-sm text-base-content md:text-md lg:text-lg">
                ✨ ศึกษาวิชาพื้นฐานทั่วไปและวิชาเกี่ยวกับสาขาคอมพิวเตอร์ธุรกิจ เช่นบัญชี การตลาด กฏหมาย(เกี่ยวกับธุรกิจที่ต้องรู้) โลจิสติกส์ เศรษศาสตร์ และอื่นๆ
              </p>
              <p className="w-full text-sm text-base-content md:text-md lg:text-lg">
                ✨ ศึกษาวิชาเกี่ยวกับสาขาคอมพิวเตอร์ เช่น การเขียนโปรแกรม & เว็บไซต์ ระบบเครือข่าย | โปรแกรมที่ศึกษา Photoshop , Illustrator , Visual Studio , Microsoft office
              </p>
              <p className="w-full text-sm text-base-content md:text-md lg:text-lg">
                ✨ ฝึกงานเกี่ยวกับการประกอบคอมพิวเตอร์และซ่อมคอมฯ เครื่องปริ้น และทำ Final project เป็นโปรแกรมสื่อการเรียนการสอนเกี่ยวกับอุปกรณ์คอมพิวเตอร์พื้นฐาน
              </p>
            </div>

            <div className="flex items-center justify-end m-5">
              <Link href='https://www.facebook.com/profile.php?id=100057377322920' target="_blank" className="btn btn-accent">เข้าชมเว็บไซต์</Link>
            </div>
          </main>
        </aside>

      </section>

      <section className="grid grid-cols-1 gap-5 w-full max-h-screen mx-auto">
        <aside className="col-span-1 flex flex-col items-center justify-center p-10 space-y-5 duration-500 lg:pl-36">
          <h2 className="text-xl md:text-2xl font-bold text-primary-content mt-1 lg:text-4xl">
          ใบรับรอง
          </h2>
          <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper max-w-screen-md rounded-3xl object-cover overflow-hidden border-t-8 border-b-8 border-accent shadow-sm shadow-base-content"
      >
        <SwiperSlide>
        <Image
            src={"/images/SQL.png"}
            alt="p"
            width={1600}
            height={1000}
            className=" object-cover"
          />
        </SwiperSlide>
      </Swiper>
          
        </aside>
      </section>
    </main>
  );
}
