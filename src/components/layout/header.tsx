"use client";
import { Routes, routes } from "@/constants/routes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Header = () => {
  const bottomRoutes: Routes[] = routes.filter(
    (route) => route.isBottomNav === true
  );
  const isBottomRoutes: boolean = bottomRoutes.length > 0;

  const topRoutes: Routes[] = routes.filter(
    (route) => route.isBottomNav === false
  );
  const isTopRoutes: boolean = topRoutes.length > 0;

  return (
    <header className="sticky px-4 flex w-screen h-16 justify-between top-0 z-50 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/assets/favicon.ico" alt="logo" width={32} height={32} />
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        {isTopRoutes &&
          topRoutes.map((route) => (
            <Button key={route.href} variant={"outline"}>
              <route.icon />
              <Separator orientation="vertical" />
              {route.label}
            </Button>
          ))}
      </div>
      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-2">
          <ModeToggle />
          <Separator orientation="vertical" />
        </div>
        <div className="flex items-center gap-x-2">
          {isBottomRoutes &&
            bottomRoutes.map((route) => (
              <Button key={route.href} variant={"outline"}>
                <route.icon />
                <Separator orientation="vertical" />
                {route.label}
              </Button>
            ))}
        </div>
      </div>
    </header>
  );
};
