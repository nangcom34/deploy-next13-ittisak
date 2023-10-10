import React from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <main id="Experience">
      <section className="grid grid-cols-2 gap-2 w-full max-h-screen mx-auto my-5 ">
        <aside className="col-span-1 flex flex-col items-end justify-center p-10 duration-500 lg:pl-36">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-content mt-1 lg:text-6xl">
            ประสบการณ์<span className="animate-ping">⏳</span>
          </h2>
        </aside>
        <div className="col-span-1 flex flex-col items-start text-right justify-center duration-500">
          <Image
            src={"/images/Experience.png"}
            alt="Experience"
            width={1600}
            s
            height={1000}
            className=" max-w-[35vw] scale-90 hover:-translate-y-4 hover:duration-1000 hover:scale-100"
          />
        </div>
      </section>

      <section className="flex items-center justify-center flex-wrap-reverse w-full max-w-screen-xl max-h-screen mx-auto">
        <aside className="basis-full md:basis-3/5 flex items-center justify-center flex-wrap space-x-2 space-y-1 md:space-x-4 lg:space-x-6  duration-500">
          <div className="tooltip" data-tip="html5">
            <Image
              src={"/images/tools/html.png"}
              alt="html"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="css">
            <Image
              src={"/images/tools/css.png"}
              alt="css"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="javascript">
            <Image
              src={"/images/tools/javascript.png"}
              alt="javascript"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="tailwind">
            <Image
              src={"/images/tools/tailwind.png"}
              alt="tailwind"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="react">
            <Image
              src={"/images/tools/react.png"}
              alt="react"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="nextjs">
            <Image
              src={"/images/tools/nextjs.png"}
              alt="nextjs"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="nodejs">
            <Image
              src={"/images/tools/nodejs.png"}
              alt="nodejs"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="expressjs">
            <Image
              src={"/images/tools/expressjs.png"}
              alt="expressjs"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="npm">
            <Image
              src={"/images/tools/npm.png"}
              alt="npm"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="mongodb">
            <Image
              src={"/images/tools/mongodb.png"}
              alt="mongodb"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="mysql">
            <Image
              src={"/images/tools/mysql.png"}
              alt="mysql"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="git">
            <Image
              src={"/images/tools/git.png"}
              alt="git"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="github">
            <Image
              src={"/images/tools/github.png"}
              alt="github"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="postman">
            <Image
              src={"/images/tools/postman.png"}
              alt="postman"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="vscode">
            <Image
              src={"/images/tools/vscode.png"}
              alt="vscode"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="figma">
            <Image
              src={"/images/tools/figma.png"}
              alt="figma"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="photoshop">
            <Image
              src={"/images/tools/photoshop.png"}
              alt="photoshop"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="premiere pro">
            <Image
              src={"/images/tools/premiere.png"}
              alt="premiere pro"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
          <div className="tooltip" data-tip="after effects">
            <Image
              src={"/images/tools/aftereffects.png"}
              alt="after effects"
              width={200}
              height={100}
              className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
            />
          </div>
        </aside>
        <aside className="basis-2/5 flex flex-col items-center justify-center p-10 duration-500 lg:pl-36">
          <h2 className="text-lg md:text-xl font-bold text-primary-content text-center mt-1 lg:text-3xl">
            Tech Stack
          </h2>
          <h2 className="text-lg md:text-xl font-bold text-primary-content text-center mt-1 lg:text-3xl">
            &&
          </h2>
          <h2 className="text-lg md:text-xl font-bold text-primary-content text-center mt-1 lg:text-3xl">
            Tools
          </h2>
        </aside>
      </section>

      <section className="grid grid-cols-1 gap-2 w-full max-h-screen mx-auto my-5 ">
        <aside className="col-span-1 flex flex-col items-end justify-center p-10 duration-500 lg:pl-36">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl md:text-2xl font-medium mt-1 px-8  lg:text-4xl">
              ฝึกงาน
            </div>
            <div className="collapse-content ">
              <div className="grid grid-cols-9 grid-rows-2 gap-1 border border-fuchsia-700 p-5 m-3 rounded-lg">
                <div className="row-span-2 col-span-1 flex items-start justify-center my-2">
                  <Image
                    src={"/images/vj.png"}
                    alt="html"
                    width={200}
                    height={100}
                    className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
                  />
                </div>
                <div className="row-span-1 col-span-4 flex flex-col items-start justify-center">
                    <h1 className=" text-sm font-semibold md:text-lg lg:text-xl">เจ้าหน้าที่เทคโนโลยีสารสนเทศ</h1>
                    <p className=" text-xs md:text-md lg:text-lg">โรงพยาบาลวิชัยเวช อินเตอร์เนชั่นแนล อ้อมน้อย</p>
                </div>
                <div className="row-span-1 col-span-4 flex flex-col flex-wrap items-end justify-center">
                <p className=" text-xs md:text-md lg:text-lg">2018-2019</p>
                <p className=" text-xs md:text-md lg:text-lg">อ้อมน้อย</p>
                <p className=" text-xs md:text-md lg:text-lg">สมุทรสาคร</p>
                </div>
                <div className="row-span-1 col-span-8 flex items-center justify-start">
                <p className=" text-xs md:text-md lg:text-lg">รับผิดชอบให้คำแนะนำและแก้ปัญหาเทคนิคต่างๆทางคอมพิวเตอร์กับพนักงานและลูกค้า | ทำหน้า Page Login Hotspot wifi ให้ทางโรงพยาบาลได้ใช้จริง</p>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl md:text-2xl font-medium mt-1 px-8 lg:text-4xl">
              งาน
            </div>
            <div className="collapse-content ">
              <div className="grid grid-cols-9 grid-rows-2 gap-1 border border-fuchsia-700 p-5 m-3 rounded-lg">
                <div className="row-span-2 col-span-1 flex items-start justify-center my-2">
                  <Image
                    src={"/images/dev.png"}
                    alt="html"
                    width={200}
                    height={100}
                    className=" w-[60px] h-auto hover:scale-110 hover:duration-500 md:w-[80px] lg:w-[100px]"
                  />
                </div>
                <div className="row-span-1 col-span-4 flex flex-col items-start justify-center">
                    <h1 className=" text-sm font-semibold md:text-lg lg:text-xl">Freelance</h1>
                    <p className=" text-xs md:text-md lg:text-lg">Work From Home</p>
                </div>
                <div className="row-span-1 col-span-4 flex flex-col items-end justify-center">
                <p className=" text-xs md:text-md lg:text-lg">Now</p>
                <p className=" text-xs md:text-md lg:text-lg">สามพราน</p>
                <p className=" text-xs md:text-md lg:text-lg">นครปฐม</p>
                </div>
                <div className="row-span-1 col-span-8 flex items-center justify-start">
                <p className=" text-xs md:text-md lg:text-lg">รับออกแบบและเขียนเว็บไซต์ตามความต้องการของลูกค้า รองรับ Responsive Web Design | ใช้ ReactJS ในการพัฒนาเว็บ</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
