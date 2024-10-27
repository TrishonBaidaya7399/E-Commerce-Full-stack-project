import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { WixClientContext, WixClientContextProvider } from "@/context/WixContext";
import React from "react";

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <WixClientContextProvider>
      <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      </WixClientContextProvider>
    </div>
  );
}

export default CommonLayout;
