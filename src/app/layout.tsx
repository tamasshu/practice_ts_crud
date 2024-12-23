import type { Metadata } from "next";
import "../styles/base.css";

export const metadata: Metadata = {
  title: "Pokemon Todo App",
  description:
    "TypeScriptとReactを使用したNext.jsアプリです。ポケモンがタスクを担当します。",
};

type RootLayoutPropsType = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutPropsType> = ({ children }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
