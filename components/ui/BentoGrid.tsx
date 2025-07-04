"use client"
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";
import { IoCopyOutline,IoCheckmarkOutline} from "react-icons/io5";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [copytitle, setcopytitle] = useState("Email us");
  const [copyKey, setCopyKey] = useState(0);
  const handleCopy = () => {
    navigator.clipboard.writeText("info@devix.ai");
    setCopied(true);
    setcopytitle("Copied");

    // Increment the key to force Lottie re-render
    setCopyKey((prevKey) => prevKey + 1);

    setTimeout(() => {
        setcopytitle("Email us");
        setCopied(false);
    }, 3000);
};



  return (

  
  
  
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full w-full`}>
        <div className="w-full h-full absolute ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" /> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 mb-4">
            {title}
          </div>
          <div className="font-sans font-bold md:max-w-32 md:text-xs  lg:text-base  text-[#C1C2D3] z-10">
            {description}
          </div>
        
        {id === 2 && <GlobeDemo />}

        {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-6">
                {["LangChain", "OpenAI", "CrewAI"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-6">
                <span className="lg:py- lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" />
                {["Next.js", "Node.js", "Mongo"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 `}>
              <Lottie
                key={copyKey} // Use the unique key here
                options={{
                    loop: false,  // Set to false if you only want the animation to play once per click
                    autoplay: true,
                    animationData,
                    rendererSettings: {
                        preserveAspectRatio: "xMid YMid slice",
                    },
                }}
            />
               
              </div>
              <MagicButton
                title={copytitle}
                icon={copied ? <IoCheckmarkOutline /> : <IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161A31]"
                handleClick={handleCopy}
              />
            </div>
          )}

      </div>
    </div>
    </div>
  );
};
