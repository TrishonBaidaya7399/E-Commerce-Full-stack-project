import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { WixClientContext } from "@/context/WixContext";
import React from "react";

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <WixClientContext>

      <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      </WixClientContext>
    </div>
  );
}

export default CommonLayout;
