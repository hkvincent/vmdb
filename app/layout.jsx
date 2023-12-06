import Header from "components/Header";
import Navbar from "components/Navbar";
import SearchBox from "components/SearchBox";

import "./globals.css";
import Providers from "./Providers";
import Footer from "components/Footer";

export const metadata = {
  title: 'VMDB',
  description: 'find your fav movie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          <Navbar />

          {/* SearchBox */}

          <SearchBox />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
