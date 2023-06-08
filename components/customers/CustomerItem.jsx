import Image from "next/image";
import React from "react";

const CustomerItem = () => {
  return (
    <div className="mt-9 mx-4">
      <div className="p-6 bg-secondary text-white rounded-md">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="flex flex-col pt-3">
          <span className="text-md font-bold">Mona Michelle</span>
          <span className="text-[15px]">Magna Aliqua</span>
        </div>
      </div>
      <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-y-3 before:-translate-x-2 before:rotate-45 before:bg-primary before:w-5 before:h-5">
        <Image
          src="/images/client.jpeg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
