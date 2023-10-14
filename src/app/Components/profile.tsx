import { ReactNode } from "react";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import AnimatedTitle from "./animatedTitle"
export default function Profile({ children }: { children: ReactNode }) {
  return (
    <>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image alt="Avatar" className="object-cover" height={200} shadow="md" src="/getpersonimage.png" width="100%"/>
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90 splt">
                    Hi , my
                  </h3>
                  <p className="text-small text-foreground/80">name is Fluke</p>
                  <h1 className="text-large font-medium mt-2">
                    <AnimatedTitle name={"Full-stack Developer"} />
                  </h1>
                  <img  src="https://www.codewars.com/users/flukejaja/badges/micro"/>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      {children}
    </>
  );
}
