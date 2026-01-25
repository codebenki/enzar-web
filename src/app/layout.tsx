import "./globals.css";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since this is the root layout, it just renders the children
// (which will be the localized layout from the [locale] folder)
export default function RootLayout({ children }: Props) {
  return children;
}
