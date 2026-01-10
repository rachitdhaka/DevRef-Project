"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Landing } from "./Pages/Landing";
import { Container } from "./components/Container";
import Footer from "./components/Footer";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("rgb(38 38 38)");

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setColor("rgb(38 38 38)");
    } else {
      setColor("rgb(232, 225, 225)");
    }
  }, [resolvedTheme]);

  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, ${color} 1px, transparent 1px),
        linear-gradient(to bottom, ${color} 1px, transparent 1px)
      `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
      {/* Your Content/Components */}
      <Container>
        <Landing />
      </Container>
      <Footer />
    </div>
  );
}
