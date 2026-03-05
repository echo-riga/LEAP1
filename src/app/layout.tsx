import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "LEAF - Learning Enhancement and Administration Framework",
  description: "Manage your organization efficiently and securely with LEAF.",
  keywords: ["LEAF", "management", "organization", "admin"],
  metadataBase: new URL("https://leaprs.vercel.app"),
  openGraph: {
    title: "LEAF",
    description: "Manage your organization efficiently and securely.",
    url: "https://leaprs.vercel.app",
    siteName: "LEAF",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
