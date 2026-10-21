import { Header } from "@/features/home/components/header";
import{ Footer} from "@/features/home/components/footer";
import React from "react";

//layout of hearder main and footer section of kripton

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="z-20 relative w-full pt-0 md:pt-0">{children}</main>
      <Footer />
    </>
  );
}