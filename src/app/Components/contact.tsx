import { ReactNode } from "react";
import {
  Card,
  CardBody,
  Image,
  Button,
  Progress,
  Link,
} from "@nextui-org/react";
import AnimatedTitle from "./animatedTitle";
export default function Contact({ children }: { children: ReactNode }) {
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
              <Image
                alt="Avatar"
                className="object-cover"
                height={200}
                shadow="md"
                src="/getpersonimage.png"
                width="100%"
              />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex items-center justify-center">
                <div className="flex flex-col gap-0 ">
                  <h3 className="font-semibold text-foreground/90 splt">
                    <Link
                      isExternal
                      href="https://github.com/flukejaja"
                      showAnchorIcon >
                      GIT HUB
                    </Link>
                  </h3>
                  <p className="text-small text-foreground/80">
                  <Link
                      isExternal
                      href="https://www.facebook.com/pakkapong.sittipohn.9"
                      showAnchorIcon >
                      FACEBOOK
                    </Link>
                  
                  </p>
                  
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
