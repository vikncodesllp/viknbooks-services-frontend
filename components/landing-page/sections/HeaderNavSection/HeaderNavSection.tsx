"use client";
import { Button } from "../../../../components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useRouter, usePathname as useLocation } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../../../../components/ui/sheet";

export const HeaderNavSection = () => {
  const { i18n, t } = useTranslation();
  const navigate = useRouter();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const navItems: Array<{label: string, id?: string, route?: string}> = [
    { label: t("landing.nav.pricing"), id: "pricing" },
    { label: t("landing.nav.features"), id: "features" },
    { label: "Blog", route: "/blog" },
  ];

  return (
    <header className="relative z-10 w-full border-b border-[#e6e6e6] bg-white">
      <div className="mx-auto flex min-h-[70px] w-full max-w-[1512px] items-center px-4 sm:min-h-[97px] sm:px-8 lg:px-[126px]">
        {/* Left Section: Logo */}
        <div className="flex flex-1 items-center justify-start">
          <a href="/" className="inline-flex shrink-0 items-center">
            <img
              className="h-8 w-auto sm:h-10"
              alt="ViksASpp logo"
              src="/assets/logos/logo-viksapp.svg"
            />
          </a>
        </div>

        {/* Center Section: Navigation */}
        <nav
          className="hidden items-center gap-[43px] md:inline-flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = item.route && location === item.route;
            
            return (
              <Button
                key={item.id || item.route}
                variant="ghost"
                onClick={() => {
                  if (item.route) {
                    navigate.push(item.route);
                  } else if (item.id) {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    } else {
                      // Navigate to landing page with hash
                      navigate.push(`/#${item.id}`);
                    }
                  }
                }}
                className={cn(
                  "cursor-pointer h-8 px-2.5 [font-family:'Inter',Helvetica] text-sm leading-[normal] tracking-[0] hover:bg-transparent",
                  isActive ? "text-[#04853E] font-bold hover:text-[#04853E]" : "text-black font-normal hover:text-black"
                )}
              >
                {item.label}
              </Button>
            );
          })}
        </nav>

        {/* Right Section: Language & Get Started */}
        <div className="flex flex-1 items-center justify-end gap-4 sm:gap-7">
          <Select
            value={i18n.language}
            onValueChange={(value) => i18n.changeLanguage(value)}
          >
            <SelectTrigger className="cursor-pointer flex w-fit h-auto gap-[7px] border-0 bg-transparent p-0 [font-family:'SF_Pro-Regular',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-black focus:ring-0 focus:ring-offset-0 sm:text-base">
              <SelectValue placeholder="Eng">
                {i18n.language === "ar" ? "AR" : "ENG"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="en">English (ENG)</SelectItem>
              <SelectItem value="ar">العربية (AR)</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={() => {
              window.location.href = (process.env.NEXT_PUBLIC_GET_STARTED_URL || "https://accounts.viknbooks.com/signin?service=whatsapp");
            }}
            className="hidden md:inline-flex h-auto min-h-8 cursor-pointer rounded-[100px] bg-[#036830] px-3 py-1.5 [font-family:'SF_Pro-Regular',Helvetica] text-xs font-normal leading-[normal] tracking-[0] text-white hover:bg-[#02592a] sm:min-h-10 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            {t("landing.nav.getStarted")}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full p-0 flex flex-col gap-0 bg-white sm:max-w-full [&>button]:hidden">
              {/* Replicated Header inside Sheet */}
              <div className="flex h-[70px] w-full items-center px-4 border-b border-[#e6e6e6]">
                <div className="flex flex-1 items-center justify-start">
                  <a href="/" className="inline-flex shrink-0 items-center">
                    <img
                      className="h-8 w-auto sm:h-10"
                      alt="ViksApp logo"
                      src="/assets/logos/logo-viksapp.svg"
                    />
                  </a>
                </div>
                <div className="flex flex-1 items-center justify-end gap-4">
                  <Select
                    value={i18n.language}
                    onValueChange={(value) => i18n.changeLanguage(value)}
                  >
                    <SelectTrigger className="cursor-pointer flex w-fit h-auto gap-[7px] border-0 bg-transparent p-0 [font-family:'SF_Pro-Regular',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-black focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Eng">
                        {i18n.language === "ar" ? "AR" : "ENG"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectItem value="en">English (ENG)</SelectItem>
                      <SelectItem value="ar">العربية (AR)</SelectItem>
                    </SelectContent>
                  </Select>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close navigation menu</span>
                    </Button>
                  </SheetClose>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col px-4 pt-4 pb-8 h-full overflow-y-auto">
                <nav className="flex flex-col">
                  {navItems.map((item) => {
                    const isActive = item.route && location === item.route;
                    
                    return (
                      <div key={item.id || item.route} className="border-b border-[#e6e6e6]">
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setIsOpen(false);
                            setTimeout(() => {
                              if (item.route) {
                                navigate.push(item.route);
                              } else if (item.id) {
                                const element = document.getElementById(item.id);
                                if (element) {
                                  element.scrollIntoView({ behavior: "smooth" });
                                } else {
                                  navigate.push(`/#${item.id}`);
                                }
                              }
                            }, 300);
                          }}
                          className={cn(
                            "w-full justify-start rounded-none h-14 px-0 hover:bg-transparent [font-family:'Inter',Helvetica] text-sm leading-[normal] tracking-[0]",
                            isActive ? "text-[#04853E] font-bold hover:text-[#04853E]" : "text-black font-normal hover:text-black"
                          )}
                        >
                          {item.label}
                        </Button>
                      </div>
                    );
                  })}
                </nav>
                
                {/* Fixed Bottom Button */}
                <div className="mt-auto pt-4">
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href = (process.env.NEXT_PUBLIC_GET_STARTED_URL || "https://accounts.viknbooks.com/signin?service=whatsapp");
                    }}
                    className="w-full h-[46px] rounded-[100px] bg-[#036830] [font-family:'SF_Pro-Regular',Helvetica] text-sm font-normal text-white hover:bg-[#02592a]"
                  >
                    {t("landing.nav.getStarted")}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

