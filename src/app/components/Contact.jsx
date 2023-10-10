import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main id="Contact">
      <section className="grid grid-cols-5 gap-5 w-full max-h-screen mx-auto my-5 ">
        <aside className="col-span-5 md:col-span-3 flex flex-col items-center justify-center p-10 duration-500 lg:pl-36">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-content mt-1 lg:text-6xl">
            ติดต่อ<span className="animate-ping"> 📩</span>
          </h2>
          <p className="text-base-content text-sm md:text-lg my-7 lg:text-2xl">
            คุณสามารถส่งข้อความถึงผมได้ในโซเชียลมีเดียที่อยู่ด้านล่างนี้
            ผมจะพยายามตอบกลับให้เร็วที่สุด
          </p>
          <div className=" flex items-center justify-start space-x-5 flex-wrap">
            <Link
              href="https://www.instagram.com/pong_neang/"
              className="w-6 h-6 md:w-10 md:h-10 hover:scale-150 hover:duration-500 "
            >
              <Image src={"/images/ig.png"} alt="ig" width={100} height={100} />
            </Link>
            <Link
              href="https://www.facebook.com/ittisak.thammasa"
              className="w-6 h-6 md:w-10 md:h-10 hover:scale-150 hover:duration-500 "
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
              className="w-6 h-6 md:w-10 md:h-10 hover:scale-150 hover:duration-500 "
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
              className="w-6 h-6 md:w-10 md:h-10 hover:scale-150 hover:duration-500 "
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
              className="w-8 h-8 md:w-12 md:h-12 hover:scale-150 hover:duration-500 "
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
        <aside className="col-span-5 md:col-span-2 flex flex-col items-center md:items-start justify-center p-10 lg:pr-36">
          <div className="avatar">
            <div className="mx-auto w-1/2 md:w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border border-primary-content lg:border-8 object-cover overflow-hidden">
              <Image
                src={"/images/neang1.png"}
                alt="p"
                width={1600}
                height={1000}
                className="scale-100 hover:duration-1000 hover:scale-150"
              />
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
