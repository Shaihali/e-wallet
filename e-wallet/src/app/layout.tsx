import { ColorSchemeScript } from "@mantine/core";
import cn from "clsx";
import { Montserrat as PrimaryFont } from "next/font/google";
import { FC, PropsWithChildren } from "react";

import type { Metadata } from "next";
import { Providers } from "./Provider";

import "@mantine/core/styles.css";

const primaryFont = PrimaryFont({
  subsets: ["latin"],
  variable: "--mantine-font-family",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "E-Wallet",
  description: "Твой виртуальный карманный помощник",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html className={cn(primaryFont.variable)} lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
