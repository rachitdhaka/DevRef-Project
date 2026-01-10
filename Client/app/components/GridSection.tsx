"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Component {
  _id: string;
  componentName: string;
  inspiredPerson: string;
  inspiredLink: string;
  code: string;
  mediaLink: string;
}

export const GridSection = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch("https://devref-project.onrender.com/all");
        const data = await response.json();
        setComponents(data);
      } catch (error) {
        console.error("Failed to fetch components:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, []);

  const isVideo = (url: string) => {
    // Check for file extensions or Cloudinary video URLs
    if (/\.(mp4|webm|ogg|mov)$/i.test(url)) return true;
    if (
      url.includes("cloudinary.com") &&
      (url.includes("/video/") || url.includes("resource_type=video"))
    )
      return true;
    return false;
  };

  if (loading) {
    return (
      <section className="max-w-5xl p-2 mx-auto mt-10">
        <div className="grid grid-cols-3 gap-4 p-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full h-48 rounded-2xl bg-neutral-200 dark:bg-neutral-800 animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl p-2 mx-auto mt-10 ">
      <div className="grid grid-cols-3 gap-4 p-4">
        {components.map((item) => (
          <div
            key={item._id}
            className="w-full h-full rounded-2xl overflow-hidden border dark:border-neutral-800 border-neutral-400"
          >
            <div>
              {isVideo(item.mediaLink) ? (
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                >
                  <source src={item.mediaLink} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.mediaLink}
                  alt={item.componentName}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="px-2 py-4">
              <p className="text-lg text-neutral-900 dark:text-neutral-300">
                {item.componentName}
              </p>
              {item.inspiredPerson && (
                <>
                  <span className="text-sm text-neutral-600">
                    Inspired By :{" "}
                  </span>
                  <Link
                    href={item.inspiredLink}
                    className="hover:text-sky-500 transition-all duration-200 ease-in-out"
                  >
                    {item.inspiredPerson}
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ComponentSection = () => {
  return (
    <div className="w-full h-full  rounded-2xl overflow-hidden ">
      <div>
        <video className="w-full h-full object-cover" muted loop autoPlay>
          <source src="/Video/Mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="px-2 py-4 ">
        <p>Component- title </p>
      </div>
    </div>
  );
};
