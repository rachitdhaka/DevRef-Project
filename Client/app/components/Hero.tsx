import { Button } from "./Button";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-20 sm:mt-32 md:mt-40">
      <p className="mt-6 sm:mt-10 max-w-3xl text-center font-bold text-3xl sm:text-4xl md:text-5xl tracking-normal leading-tight">
        Build Faster. Own Everything
      </p>

      <p className="max-w-xs sm:max-w-md md:max-w-lg my-4 sm:my-5 dark:text-neutral-400 text-center text-sm sm:text-base">
        A premium, curated library of copy-paste code for Senior Engineers.{" "}
        <span className="dark:text-accent-secondary text-sky-400">
          Stop reinventing the wheel.
        </span>{" "}
        No npm installs. No black boxes. Start shipping.
      </p>

      <Link href="/Main">
        <Button className="text-sm dark:bg-neutral-900 hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:hover:shadow-[0px_0px_120px_0px_#90cdf4]">
          Start Exploring
        </Button>
      </Link>
    </div>
  );
};
