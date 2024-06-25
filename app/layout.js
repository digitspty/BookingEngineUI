import { Open_Sans } from "@next/font/google";
import Nav from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';

// These styles apply to every route in the application
import "../styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
      <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
