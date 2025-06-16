import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 SHYUNU&apos;S BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @shyunu</footer>
        </div>
      </body>
    </html>
  );
}
