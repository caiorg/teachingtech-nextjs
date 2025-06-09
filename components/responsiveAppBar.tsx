import * as React from "react";
import Image from "next/image";
import Link from "next/link"; // Import next/link
import { siteTitle } from "../pages/_app"; // Assuming this is still relevant

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // Import SheetClose
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu as MenuIcon, UserCircle } from "lucide-react"; // UserCircle for avatar fallback

const pages = ["Calibration"];
// Example: const pages = [{ name: "Calibration", href: "/calibration" }, { name: "Other Page", href: "/other-page"}];
const pageLinks = pages.map(page => ({ name: page, href: `/${page.toLowerCase()}` }));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" passHref legacyBehavior>
          <a className="mr-6 flex items-center space-x-2">
            <Image
              priority
              src="/tt.png"
              height={40}
              width={40}
              alt={siteTitle || "Site Logo"}
            />
            {/* Optional: Site title text next to logo */}
            {/* <span className="font-bold hidden sm:inline-block">{siteTitle || "My Site"}</span> */}
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center space-x-4">
          {pageLinks.map((page) => (
            <Link key={page.name} href={page.href} passHref legacyBehavior>
              <Button variant="ghost" asChild>
                <a>{page.name}</a>
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Mobile Navigation (Sheet) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" passHref legacyBehavior>
                      <a className="flex items-center space-x-2">
                        <Image
                          priority
                          src="/tt.png"
                          height={30}
                          width={30}
                          alt={siteTitle || "Site Logo"}
                        />
                        <span>{siteTitle || "Menu"}</span>
                      </a>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col space-y-2">
                  {pageLinks.map((page) => (
                    <SheetClose asChild key={page.name}>
                       <Link href={page.href} passHref legacyBehavior>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <a>{page.name}</a>
                        </Button>
                       </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* User Avatar and Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/static/images/avatar/2.jpg" alt="User avatar" />
                  <AvatarFallback>
                    <UserCircle className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">My Account</p>
                  {/* <p className="text-xs leading-none text-muted-foreground">
                    user@example.com
                  </p> */}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {settings.map((setting) => (
                <DropdownMenuItem key={setting} onSelect={() => alert(setting + ' clicked')}>
                  {/* Ideally, these would also be Links or trigger functions */}
                  {setting}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
export default ResponsiveAppBar;
