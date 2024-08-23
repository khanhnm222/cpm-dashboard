import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { UserCircleIcon, WalletIcon } from "@heroicons/react/20/solid";
import { Calendar, LogOutIcon, Settings2 } from "lucide-react";

const User = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className=" flex items-center">
          <div className="flex-shrink-0 w-10 h-10 relative">
            <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
              <img className="w-8 h-8 rounded-full" src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg" alt="" />
              <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
              <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
          <div className="p-2 md:block text-left">
            {/* <h2 className="text-sm font-semibold text-gray-800">Khanh</h2> */}
            {/* <p className="text-xs text-gray-500">Administrator</p> */}
          </div>
        </button>
      </PopoverTrigger>
      {/* <PopoverContent className="w-[11rem]">
        <div className="grid gap-4 justify-center">
          <div className="grid gap-2 cursor-pointer px-2">
            <div className="items-center gap-4">
              <Link href='/user-profile'>
                <Label htmlFor="width" className="cursor-pointer hover:text-primary flex items-center gap-2">
                  <UserCircleIcon height={20}/> Profile
                </Label>
              </Link>
            </div>
          </div>
          <div className="grid gap-2 cursor-pointer px-2">
            <div className="items-center gap-4">
              <Link href='/calendar'>
                <Label htmlFor="width" className="cursor-pointer hover:text-primary flex items-center gap-2">
                  <Calendar height={20}/>
                  Calendar
                </Label>
              </Link>
            </div>
          </div>
          <div className="grid gap-2 cursor-pointer px-2">
            <div className="items-center gap-4">
              <Link href='/profile'>
                <Label htmlFor="width" className="cursor-pointer hover:text-primary flex items-center gap-2">
                  <WalletIcon height={20}/>
                  Wallet
                </Label>
              </Link>
            </div>
          </div>
          <div className="grid gap-2 cursor-pointer px-2">
            <div className="items-center gap-4">
              <Link href='/settings'>
                <Label htmlFor="width" className="cursor-pointer hover:text-primary flex items-center gap-2">
                  <Settings2 height={20}/>
                  Settings
                </Label>
              </Link>
            </div>
          </div>
          <div className="grid gap-2 cursor-pointer px-2">
            <div className="items-center gap-4">
              <Link href='/'>
                <Label htmlFor="width" className="cursor-pointer hover:text-primary flex items-center gap-2">
                  <LogOutIcon height={20} />
                  Logout
                </Label>
              </Link>
            </div>
          </div>
        </div>
      </PopoverContent> */}
    </Popover>
  );
};
export default User;