
import Topnav from "./components/Topnav";
import Navbar from "./components/MainNav";
import Mainfooter from "./components/Footer";
import "./globals.css";
import Prvider from './Redux/Prvider'


export const metadata = {
  title: "Cartez Shop every thing Here",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

     <Prvider>
     <Topnav/>
      
     <Navbar/>
     {children}
     <Mainfooter/>
     </Prvider>
      </body>
    </html>
  );
}
