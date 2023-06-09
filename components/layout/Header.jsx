import Logo from "../ui/Logo";
import {
  FaUserAlt,
  FaShoppingCart,
  FaSearch,
  FaWindowClose,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Search from "../ui/Search";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`h-[5.5rem] z-50 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Anasayfa</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menüler</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">Hakkımızda</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Rezervasyon</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              onClick={() => setIsMenuModal(false)}
              className="absolute top-4 right-4"
            >
              <FaWindowClose
                size={20}
                className="hover:text-primary transition-all"
              />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
          <span>
              <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <Link href="/cart">
          <span>
              <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all cursor-pointer" />
          </button>
          <a href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">Sipariş Ver</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-2xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
