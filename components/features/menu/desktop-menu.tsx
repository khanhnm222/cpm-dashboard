"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Menu = () => {
  const pathname = usePathname();

  const activatedMenu = useMemo((): string => {
    if (pathname) {
      return '';
    }
    return '';
  }, [pathname]);

  return (
    <nav className="px-8">
      <div className="-mb-px flex justify-center">
        <Link
          href={''}
          className={cn(
            "no-underline uppercase tracking-wide font-bold text-xs py-3 mr-8",
            activatedMenu === 'HOME' && "text-primary border-b-2 border-primary"
          )}
        >
          Home
        </Link>
        <Link
          href={'CATEGORIES'}
          className={cn(
            "no-underline text-grey-dark uppercase tracking-wide font-bold text-xs py-3 mr-8",
            activatedMenu === 'CATEGORIES' && "text-primary border-b-2 border-primary"
          )}
        >
          Categories
        </Link>
      </div>
    </nav>
  );
};

export default Menu;