import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Title from "./ui/Title";

const CampaignItem = () => {
    return <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
        <div className="relative sm:w-40 sm:h-40 w-36 h-36 rounded-full after:content-[''] after:absolute after:w-full after:h-full after:border-[5px] after:rounded-full after:border-primary overflow-hidden">
            <Image  src="/images/o1.jpg" alt="" layout="fill" objectFit="cover" className="hover:scale-105 transition-all" />
        </div>
        <div className="text-white ">
            <Title addClass="text-2xl">Ürün Adı</Title>
            <div className="my-2">
                <span className="text-[40px] font-dancing">20%</span>
                <span className="text-sm font-dancing"> Off</span>
            </div>
            <button className="btn-primary flex items-center gap-x-2">Sipariş Ver <FaShoppingCart size={15} /></button>
        </div>
    </div>;
};

const Campaigns = () => {
  return (
    <div className='flex justify-between container mx-auto py-20 gap-6 flex-wrap'>
        <CampaignItem />
        <CampaignItem />
    </div>
  );
};

export default Campaigns