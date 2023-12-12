"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import deved from "../../public/anime-pic.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Profile</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-orange-600 font-medium dark:text-orange-400 md:text-6xl">
              Hung Le
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto">
              Undergraduate senior at Oregon State University specialize in
              software engineer. Join me below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 dark:text-gray-300">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-orange-600 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Aut pariatur aliquid quo perspiciatis esse ut sunt voluptas id
              odit harum? Est asperiores laboriosam non nemo accusamus qui
              quibusdam deserunt ex illo dolores ut corrupti odio aut aspernatur
              nisi. Et aspernatur autem eos quas repellendus hic suscipit
              galisum eum maxime error ut quasi facere ea quidem magnam.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Ut consequatur consectetur id laudantium corrupti non galisum
              architecto et voluptate cupiditate est dolores rerum. Ut nemo
              omnis sed voluptatem nisi qui voluptates voluptatum non culpa iure
              et voluptas quia et itaque magni?
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="mx-auto"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-xl font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                {" "}
                Create elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-orange-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="mx-auto"
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-xl font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                {" "}
                Create elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-orange-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image className="mx-auto" src={code} width={100} height={100} />
              <h3 className="text-xl font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                {" "}
                Create elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-orange-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Aut pariatur aliquid quo perspiciatis esse ut sunt voluptas id
              odit harum? Est{" "}
              <span className="text-orange-600">asperiores laboriosam</span> non
              nemo accusamus qui quibusdam deserunt ex illo dolores ut corrupti
              odio aut aspernatur nisi. Et aspernatur autem eos quas repellendus
              hic suscipit galisum eum maxime error ut quasi facere ea quidem
              magnam.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">
              Ut consequatur consectetur id laudantium corrupti non galisum
              architecto et{" "}
              <span className="text-orange-600">voluptate cupiditate est</span>{" "}
              dolores rerum. Ut nemo omnis sed voluptatem nisi qui voluptates
              voluptatum non culpa iure et voluptas quia et itaque magni?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
