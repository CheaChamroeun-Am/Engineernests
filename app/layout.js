import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Engineernest",
  description: "Find Top Engineers for Side Jobs and Diverse Projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-gr-c-s-loaded attribute="true" className="font-poppins bg-bg ">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
