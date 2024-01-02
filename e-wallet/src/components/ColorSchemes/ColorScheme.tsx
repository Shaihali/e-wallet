"use client";

import { useMantineColorScheme, Button, Group, Box } from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export const ColorSchemes = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Button variant="transparent" onClick={() => toggleColorScheme()}>
      {colorScheme === "dark" ? (
        <IconMoonFilled size={"2rem"} />
      ) : (
        <IconSunFilled size={"2rem"} />
      )}
    </Button>
  );
};
