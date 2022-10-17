import Head from "next/head";
import { UserProvider } from "../lib/authContext";
import Nav from "./Nav";
import Footer from "./Footer";
import Login from "./Login";

const Layout = ({ user, loading = false, children }) => (
  <>
    {user ? (
      <UserProvider value={{ user, loading }}>
        <Head>
          <title>TradeSmith Parabolic Profits - A Revolutionary New Research Service from</title>
        </Head>

        <Nav />

        <main className="bg-[#F1F2F6] grow px-4 pt-20">
          <div className="flex justify-center w-[825px] mx-auto py-16">
            <div>{children}</div>
          </div>
        </main>

        <Footer />
      </UserProvider>
    ) : (
      <Login />
    )}
  </>
);

export default Layout;
