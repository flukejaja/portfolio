import React, { ReactNode } from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { CountUp } from 'use-count-up'
import { useInView } from "react-intersection-observer";
const image = [{
    name:'Typescript',
    path: "/language/Typescript_logo_2020.svg.png",
    percentage: 75
},
{
    name:'.Net',
    path: "/language/Microsoft_.NET_logo.svg.png",
    percentage : 60
},
{
    name:'Golang',
    path: "/language/Go-Logo_Aqua.png",
    percentage: 40
}
]
export default function Skill({ children }: { children: ReactNode }) {
    const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});
  return (
   <>
    <div className="flex flex-row space-x-4" ref={ref}>
    {
        image.map((v , idx ) => {
            return <Card key={idx}
            isFooterBlurred
            radius="lg"
            className="border-none"
          >
            <Image
              alt="language img"
              className="object-cover"
              height={200}
              src={v.path}
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-black">{v.name}</p>
              <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                <CountUp
                start={1}
				end={v.percentage}
				duration={2}
                isCounting={inView} /> %
              </Button>
            </CardFooter>
          </Card>

        })
    }
    </div>
    { children }
   </>
  );
}