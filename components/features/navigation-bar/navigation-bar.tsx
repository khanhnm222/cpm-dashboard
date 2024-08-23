"use client";
// import Image from "next/image";
import styles from './style.module.css';
import { IconNotification } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";
import MobileMenu from "../menu/mobile-menu";
import { useRouter } from "next/navigation";
import User from "../user/user";
// import Search from "./search";
// import Menu from "../menu/desktop-menu";
import { Bars3Icon } from "@heroicons/react/20/solid";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="justify-between fixed w-full z-30 flex bg-white/90 dark:bg-[#0F172A] p-2 items-center h-16 px-10 bg-gradient-2 border-b-[1px] border-primary shadow-sm">
      <div className={cn(
        styles.logoContainer,
      )}
      >
        {/* <Image src={logo} width={100} height={100} alt="logo" onClick={() => router.push('/', { scroll: false })} /> */}
        Dashboard
      </div>
      <div className="hidden md:flex lg:flex grow h-full items-center justify-center">
        {/* <Menu /> */}
        {/* <Search /> */}
      </div>
      <div className="flex-none h-full text-center flex items-center justify-center">
        <div className="flex space-x-3 items-center px-3">
          <div className="flex-none flex justify-center gap-1 items-center">
            <button className={
              cn(
                'h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-primary transition-all hover:bg-gray-500/10 active:bg-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
                styles.alignCenter
              )}
              data-ripple-dark="true"
            >
              <IconNotification width={''} height='25px' />
            </button>
            <User />
          </div>
          <div className="lg:hidden md:hidden cursor-pointer">
            <Bars3Icon
              aria-hidden="true"
              className="h-5 w-5 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </div>
  );
};

export default NavigationBar;