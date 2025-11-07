import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
// import ScrollTriggerDemo from "./components/ScrollTriggerDemo";

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
