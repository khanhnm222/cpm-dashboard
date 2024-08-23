"use client";
import { IconSearch } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useMemo } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const pathname = usePathname();

  const activatedMenu = useMemo((): string => {
    if (pathname) {
      return ''
    }
    return '';
  }, [pathname]);

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-50 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />
      <div className="-mt-px flex justify-center fixed inset-0 z-50">
        <DialogPanel
          transition
          className="mb-auto items-center flex w-full transform flex-col bg-white p-4 pt-4 transition duration-300 ease-in-out data-[closed]:-translate-y-full"
        >
          <Link
            href={''}
            className={cn(
              "no-underline uppercase tracking-wide font-bold text-xs py-3 mr-8",
              activatedMenu === '' && "text-primary border-b-2 border-primary"
            )}
          >
            Home
          </Link>
          <Link
            href={''}
            className={cn(
              "no-underline text-grey-dark uppercase tracking-wide font-bold text-xs py-3 mr-8",
              activatedMenu === '' && "text-primary border-b-2 border-primary"
            )}
          >
            Categories
          </Link>
          <div className="relative text-gray-600 mt-4 w-full px-5">
            <div className="border-[1.5px] rounded-full border-primary">
              <input
                type="search"
                name="serch"
                placeholder="Search"
                className="bg-white h-8 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 px-5">
                <IconSearch className=""/>
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileMenu;