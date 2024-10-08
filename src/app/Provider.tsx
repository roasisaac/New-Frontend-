"use client"
import {ThemeProvider as NextThemesProvider} from "next-themes"
import {NextUIProvider} from "@nextui-org/react";

export default function Provider({children}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
       <NextThemesProvider attribute="class" defaultTheme="dark">
    
      {children}
 
   </NextThemesProvider>
    </NextUIProvider>
  );
}