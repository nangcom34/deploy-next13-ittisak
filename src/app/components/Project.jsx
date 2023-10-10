import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main id="Project">
      <section className="grid grid-cols-2 gap-2 w-full max-h-screen mx-auto my-5 ">
        <aside className="col-span-1 flex flex-col items-end justify-center p-10 duration-500 lg:pl-36">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-content mt-1 lg:text-6xl">
            ผลงาน<span className="animate-ping">🧾</span>
          </h2>
        </aside>
        <div className="col-span-1 flex flex-col items-start text-right justify-center duration-500 drop-shadow-md">
          <Image
            src={"/images/project.png"}
            alt="Experience"
            width={1600}
            s
            height={1000}
            className=" max-w-[35vw] scale-90 object-cover hover:-translate-y-4 hover:duration-1000 hover:scale-100 drop-shadow-md"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 w-full h-auto mx-auto my-5 gap-4 px-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <aside className="col-span-1 flex items-center justify-center flex-wrap gap-5 duration-500 shadow-sm shadow-base-content rounded-3xl overflow-hidden ">
          <Link
            href="https://ittisak.netlify.app/" target="_blank "
            className="group relative block bg-accent rounded-3xl w-full h-72 md:h-96 overflow-hidden "
          >
            <Image
              src={"/images/web-port.png"}
              alt="web-port"
              width={1600}
              height={800}
              className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-10"
            />

            <div className="mt-32 sm:mt-48 lg:mt-64 p-5">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-8 group-hover:opacity-100 space-y-1">
                <p className="text-xl font-bold text-primary-content sm:text-2xl">
                  DEMO-Protfolio
                </p>
                <p className="text-sm font-semibold uppercase text-neutral">
                  html5 | css | javascript
                </p>

                <p className="text-sm text-accent-content">
                  ตัวอย่างเว็บ Persona Profile ที่เขียนขึ้นเพื่อฝึกฝนทักษะการใช้งาน CSS แบบไม่ใช้ framework โดยมีปุ่มปรับ Dark Mode และ animetion การทำ animetion จะใช้ ScrollReveal.JS | รองรับ Responsive
                </p>
              </div>
            </div>
          </Link>
        </aside>

        <aside className="col-span-1 flex items-center justify-center flex-wrap gap-5 duration-500 shadow-sm shadow-base-content rounded-3xl overflow-hidden ">
          <Link
            href="#"
            className="group relative block bg-accent rounded-3xl w-full h-72 md:h-96 overflow-hidden "
          >
            <Image
              src={"/images/web-port.png"}
              alt="web-port"
              width={1600}
              height={800}
              className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-10"
            />

            <div className="mt-32 sm:mt-48 lg:mt-64 p-5">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-8 group-hover:opacity-100 space-y-1">
                <p className="text-xl font-bold text-primary-content sm:text-2xl">
                  DEMO-Protfolio
                </p>
                <p className="text-sm font-semibold uppercase text-neutral">
                  html5 | css | javascript
                </p>

                <p className="text-sm text-accent-content">
                  ตัวอย่างเว็บ Persona Profile ที่เขียนขึ้นเพื่อฝึกฝนทักษะการใช้งาน CSS แบบไม่ใช้ framework โดยมีปุ่มปรับ Dark Mode และ animetion การทำ animetion จะใช้ ScrollReveal.JS | รองรับ Responsive
                </p>
              </div>
            </div>
          </Link>
        </aside>

        <aside className="col-span-1 flex items-center justify-center flex-wrap gap-5 duration-500 shadow-sm shadow-base-content rounded-3xl overflow-hidden ">
          <Link
            href="#"
            className="group relative block bg-accent rounded-3xl w-full h-72 md:h-96 overflow-hidden "
          >
            <Image
              src={"/images/web-port.png"}
              alt="web-port"
              width={1600}
              height={800}
              className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-10"
            />

            <div className="mt-32 sm:mt-48 lg:mt-64 p-5">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-8 group-hover:opacity-100 space-y-1">
                <p className="text-xl font-bold text-primary-content sm:text-2xl">
                  DEMO-Protfolio
                </p>
                <p className="text-sm font-semibold uppercase text-neutral">
                  html5 | css | javascript
                </p>

                <p className="text-sm text-accent-content">
                  ตัวอย่างเว็บ Persona Profile ที่เขียนขึ้นเพื่อฝึกฝนทักษะการใช้งาน CSS แบบไม่ใช้ framework โดยมีปุ่มปรับ Dark Mode และ animetion การทำ animetion จะใช้ ScrollReveal.JS | รองรับ Responsive
                </p>
              </div>
            </div>
          </Link>
        </aside>

        <aside className="col-span-1 flex items-center justify-center flex-wrap gap-5 duration-500 shadow-sm shadow-base-content rounded-3xl overflow-hidden ">
          <Link
            href="#"
            className="group relative block bg-accent rounded-3xl w-full h-72 md:h-96 overflow-hidden "
          >
            <Image
              src={"/images/web-port.png"}
              alt="web-port"
              width={1600}
              height={800}
              className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-10"
            />

            <div className="mt-32 sm:mt-48 lg:mt-64 p-5">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-8 group-hover:opacity-100 space-y-1">
                <p className="text-xl font-bold text-primary-content sm:text-2xl">
                  DEMO-Protfolio
                </p>
                <p className="text-sm font-semibold uppercase text-neutral">
                  html5 | css | javascript
                </p>

                <p className="text-sm text-accent-content">
                  ตัวอย่างเว็บ Persona Profile ที่เขียนขึ้นเพื่อฝึกฝนทักษะการใช้งาน CSS แบบไม่ใช้ framework โดยมีปุ่มปรับ Dark Mode และ animetion การทำ animetion จะใช้ ScrollReveal.JS | รองรับ Responsive
                </p>
              </div>
            </div>
          </Link>
        </aside>

        <aside className="col-span-1 xl:col-span-2 flex items-center justify-center flex-wrap gap-5 duration-500 shadow-sm shadow-base-content rounded-3xl overflow-hidden ">
          <Link
            href="#"
            className="group relative block bg-accent rounded-3xl w-full h-72 md:h-96 overflow-hidden "
          >
            <Image
              src={"/images/web-port.png"}
              alt="web-port"
              width={1600}
              height={800}
              className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-10"
            />

            <div className="mt-32 sm:mt-48 lg:mt-64 p-5">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-8 group-hover:opacity-100 space-y-1">
                <p className="text-xl font-bold text-primary-content sm:text-2xl">
                  DEMO-Protfolio
                </p>
                <p className="text-sm font-semibold uppercase text-neutral">
                  html5 | css | javascript
                </p>

                <p className="text-sm text-accent-content">
                  ตัวอย่างเว็บ Persona Profile ที่เขียนขึ้นเพื่อฝึกฝนทักษะการใช้งาน CSS แบบไม่ใช้ framework โดยมีปุ่มปรับ Dark Mode และ animetion การทำ animetion จะใช้ ScrollReveal.JS | รองรับ Responsive
                </p>
              </div>
            </div>
          </Link>
        </aside>

        <aside className="col-span-1 xl:col-span-2 flex items-center justify-center flex-wrap gap-5 duration-500 shadow-sm shadow-base-content rounded-3xl overflow-hidden ">
          <Link
            href="#"
            className="group relative block bg-accent rounded-3xl w-full h-72 md:h-96 overflow-hidden "
          >
            <Image
              src={"/images/web-port.png"}
              alt="web-port"
              width={1600}
              height={800}
              className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-10"
            />

            <div className="mt-32 sm:mt-48 lg:mt-64 p-5">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-8 group-hover:opacity-100 space-y-1">
                <p className="text-xl font-bold text-primary-content sm:text-2xl">
                  DEMO-Protfolio
                </p>
                <p className="text-sm font-semibold uppercase text-neutral">
                  html5 | css | javascript
                </p>

                <p className="text-sm text-accent-content">
                  ตัวอย่างเว็บ Persona Profile ที่เขียนขึ้นเพื่อฝึกฝนทักษะการใช้งาน CSS แบบไม่ใช้ framework โดยมีปุ่มปรับ Dark Mode และ animetion การทำ animetion จะใช้ ScrollReveal.JS | รองรับ Responsive
                </p>
              </div>
            </div>
          </Link>
        </aside>
       
      </section>
    </main>
  );
}
