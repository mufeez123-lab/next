import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
// Corrected import: Assuming your component is named AOSInit
import { AOSInit } from './components/AOS'; 

export const metadata = {
  title: "My Website",
  description: "Professional Next.js website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Corrected usage: Use the React component, not the library object */}
      <AOSInit />
      <body className="bg-white text-gray-900">
        <SmoothScrollWrapper>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollWrapper> 
      </body>
    </html>
  );
}