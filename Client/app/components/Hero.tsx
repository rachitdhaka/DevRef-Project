import { Button } from "./Button";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 mt-40">
      <p className="mt-10 max-w-3xl text-center font-bold text-5xl tracking-normal">
        Build Faster. Own Everything
      </p>

      <p className="max-w-lg my-5 dark:text-neutral-400 text-center ">
        A premium, curated library of copy-paste code for Senior Engineers.{" "}
        <span className="dark:text-accent-secondary text-sky-400">
          Stop reinventing the wheel.
        </span>{" "}
        No npm installs. No black boxes. Start shipping.
      </p>

      <Link href="/Main">
        <Button className="text-sm dark:bg-neutral-900  hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:hover:shadow-[0px_0px_120px_0px_#90cdf4]">
          Start Exploring
        </Button>
      </Link>
    </div>
  );
};
