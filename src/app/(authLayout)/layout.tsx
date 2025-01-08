import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { WixClientContextProvider } from "@/context/WixContext";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <WixClientContextProvider>
        <ThemeProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </WixClientContextProvider>
    </div>
  );
}

export default AuthLayout;
