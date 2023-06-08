import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Index = () => {
  return (
    <div className="flex flex-wrap h-screen  items-center">
      <div className="relative md:flex-1 w-[80%] md:h-[80%] h-[50%] mx-10">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 mx-10 ">
        <Title addClass="text-[35px] mb-2">Good Pizza</Title>
        <p className="font-bold text-primary text-2xl mb-4">$20</p>
        <p className="text-secondary mb-4">
          Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting
          industry.
        </p>
        <div className="mb-4">
          <h4 className="font-bold text-secondary mb-4">Choose The Size</h4>
          <div className="flex items-center gap-x-20">
            <div className="relative w-8  h-8 items-center">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="bg-primary absolute -top-2 -right-8 text-[10px] py-1 px-2 rounded-full">Small</span>
            </div>
            <div className="relative w-12  h-12">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="bg-primary absolute -top-2 -right-9 text-[10px] py-1 px-2 rounded-full">Medium</span>
            </div>
            <div className="relative w-16  h-16">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="bg-primary absolute -top-2 -right-6 text-[10px] py-1 px-2 rounded-full">Large</span>
            </div>
          </div>
        </div>
        <h4 className="font-bold text-secondary ">Choose Additional</h4>
        <div className="flex gap-x-4 mt-4">

            <label className="flex items-center gap-x-2">
                <input type="checkbox" className="w-5 h-5 accent-primary" />
                <span className="text-sm font-semibold"> Ketçap</span>
            </label>
            <label className="flex items-center gap-x-2">
                <input type="checkbox" className="w-5 h-5 accent-primary" />
                <span className="text-sm font-semibold"> Mayonez</span>
            </label>
            <label className="flex items-center gap-x-2">
                <input type="checkbox" className="w-5 h-5 accent-primary" />
                <span className="text-sm font-semibold"> Acı Sos</span>
            </label>
        </div>
        <div className="pt-8">
            <button className="btn-primary flex items-center">
              <RiShoppingCart2Fill className="mr-[8px]" /> Sipariş Ver
            </button>
          </div>
      </div>
    </div>
  );
};

export default Index;
