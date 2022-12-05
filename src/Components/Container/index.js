import { useTheme } from "@mui/material";
import React from "react";

function HomeContainer({ children }) {
  const theme = useTheme();
  return (
    <div
      style={{
        minHeight: window.innerHeight,
        background: theme.palette.primary.background,
        color: theme.palette.secondary.main,
      }}
    >
      {children}
    </div>
  );
}

function Container({ children }) {
  const theme = useTheme();
  return (
    <div
      style={{
        padding: 20,
        paddingTop: 100,
        background: theme.palette.primary.background,
        color: theme.palette.secondary.main,
      }}
    >
      {children}
    </div>
  );
}

export { HomeContainer, Container };
