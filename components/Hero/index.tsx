"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col justify-center items-center lg:gap-8 xl:gap-12">
          <motion.div
                    initial={{opacity:0,scale:1.25}}
   whileInView={{ opacity: [0,1],y:[50,100] }}
            transition={{ duration:0.5,delayChildren: 0.5, }}
            className="text-center"
            
          >
               <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 ">
                Cloud Cost Mastery Simplified
              </h1>
              <p className="">
               You're having trouble managing your cloud costs and services? You've come to the right spot.
              </p >
              <p className="mt-3">
                Transform Your Cloud Journey: All-in-One Dashboard for Ultimate
                Savings & Efficiency.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-center gap-8">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className=" w-3/5 dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
                    />
                    <button
                      aria-label="signup to newsletter"
                      className="w-1/5 flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-5.5 py-2.5"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                {/* <p className="text-black dark:text-white mt-7">
                  Get the 14-day free trial now
                </p> */}
              </div>
              </motion.div>
            {/* <div className="text-center">
           
            </div> */}

{ <motion.div
          initial={{opacity:0,}}
         whileInView={{ opacity: [0,1],y:[0,100] }}
        transition={{ duration: 0.5,  }}
        className="md:w-1/3 hidden lg:block">
        <div className="relative 2xl:-mr-7.5 ">
                {/* <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                /> */}
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden shadow-solid-l"
                    src="/images/hero/dashboard.gif"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block shadow-solid-l"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
        </motion.div> }
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
