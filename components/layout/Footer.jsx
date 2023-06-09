import Title from "../ui/Title";
import {FaLocationArrow} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-[60px]">
        <div className="flex justify-between text-white text-center">
          <div>
            <Title addClass="text-[30px]">Contact Us</Title>
          </div>
          <div>
            <Title addClass="text-[30px]">Orderport</Title>
            </div>
          <div>
            <Title addClass="text-[30px]">Opening Hours</Title>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
