import { Nunito } from "next/font/google";
import Navbar from "@/app/components/navbar/Navbar";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import getCurrentUser from "./actions/getCurrentUser";
import ToasterProvider from "./components/providers/ToasterProvider";
import ModalsProvider from "./components/providers/ModalsProvider";
import { constructMetadata } from "@/libs/utils";

export const metadata = constructMetadata();

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <ModalsProvider />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
