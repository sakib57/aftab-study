import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NavWraper from "./components/Nav/NavWraper";
import Footer from "./components/Footer/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [user, setUser] = useState(null);
  const session: any = null; //await getServerSession(authOptions);
  console.log("Session:", session);
  console.log("Session:", session);
  return (
    <html lang="en">
      <body>
        <NavWraper user={session} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
