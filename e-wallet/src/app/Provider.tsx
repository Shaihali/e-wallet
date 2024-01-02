import { CreateTheme } from "@/theme";
import { MantineProvider } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

const theme = CreateTheme();

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
