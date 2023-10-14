import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
const body = [
  {
    title: "Adaptive-testing",
    url: "Adaptive-testing.vercel",
    imgurl: "project/e-learning.png",
    subtitle: [
      "An adaptive quiz website that tailors its questions to the proficiency level of the test-taker.",
      "Practical Adaptive Testing CAT Algorithm.",
    ],
    giturl: "https://github.com/flukejaja/Adaptive-testing-Nextjs",
  },
  {
    title: "Inventory Management (Mobile)",
    url: "",
    imgurl: "project/inventory.png",
    subtitle: [
      "Product Management(create , read , update delete )",
      "Income and Expense Report for Products in PDF",
      "Role in the app, there are 3 users: the store owner, the accountant, the seller, and the buyer.",
    ],
    giturl: "",
  },
  {
    title: "Airbnb UI Clone",
    url: "",
    imgurl: "project/airbnblogo.png",
    subtitle: ["Clone Homepage", "Map , responsive "],
    giturl: "https://github.com/flukejaja/clone-airbnb-vite-react",
  },
  {
    title: "E-commerce UI",
    url: "e-commerce-ui-alpha.vercel.app",
    imgurl: "project/e-commerce1.png",
    subtitle: ["E-commerce responsive , Shoping , Cart "],
    giturl: "https://github.com/flukejaja/e-commerce-ui",
  },
  {
    title: "Golang CRUD",
    url: "",
    imgurl: "project/golang1.png",
    subtitle: ["CREATE , READ , UPDATE , DELETE", "With database mongodb"],
    giturl: "https://github.com/flukejaja/golang-mongodb",
  },
  {
    title: "Logging out the application (websocket)",
    url: "",
    imgurl: "language/Microsoft_.NET_logo.svg.png",
    subtitle: ["Realtime with Signalr", "Use minimal API with .Net 7"],
    giturl: "https://github.com/flukejaja/nextjs-dotnet7-signalR",
  },
];
export default function Project({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="grid  grid-cols-3 grid-flow-row auto-rows-max gap-4">
        {body.map((v, idx) => {
          return (
            <Card className="max-w-[350px]" key={idx}>
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src={v.imgurl}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{v.title}</p>
                  <p className="text-small text-default-500">{v.url}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                {v.subtitle.map((x, sidx) => (
                  <p key={sidx} className="text-sm">
                    {x}
                  </p>
                ))}
              </CardBody>
              {v.giturl != "" && <Divider />}
              <CardFooter>
                {v.giturl != "" ? (
                  <Link isExternal showAnchorIcon href={v.giturl}>
                    Visit source code on GitHub.
                  </Link>
                ) : null}
              </CardFooter>
            </Card>
          );
        })}
      </div>
      {children}
    </>
  );
}
