import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default CommonLayout;
