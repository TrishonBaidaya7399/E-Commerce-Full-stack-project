"use client";

import { WixClientContext } from "@/context/WixContext";
import { useContext} from "react";

export const useWixClient = () => {
    return useContext(WixClientContext);
};
