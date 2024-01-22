import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// const inter = Inter({
//   weight: "400",
//   subsets: ["latin"],
// });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feedo",
  description: "Feedo is a simple tool to collect feedback from your users.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="navbar bg-white opacity-95 fixed font-semibold w-full flex items-center justify-between p-6">
          <div className="logo">Feedo</div>
          <div className="items hidden md:flex px-2 mx-4 text-sm">
            <ul className="flex justify-between gap-6">
              <li className="mr-4 min-w-fit cursor-pointer">Get Started</li>
              <li className="mr-4 cursor-pointer">Features</li>
              <li className="mr-4 cursor-pointer">Pricing</li>
              <li className="mr-4 cursor-pointer">FAQ</li>
            </ul>
          </div>
          <nav className="flex items-center w-full justify-end text-sm font-semibold">
            <ul className="flex justify-between">
              <li className="mr-4 cursor-pointepx-4 py-2 rounded">Login</li>
              <li className="mr-4 cursor-pointer bg-slate-900 text-white px-4 py-2 rounded">
                Signup
              </li>
            </ul>
            <div className="md:hidden">=</div>
          </nav>
        </div>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
