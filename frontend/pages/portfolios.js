import Link from "next/link";

import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";

const Portfolios = () => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <div className="min-w-[1500px] px-4 flex flex-col font-light">
        <div className="flex flex-col justify-center justify-items-center content-center items-center">
          <p className="text-4xl font-thin mb-5 uppercase tracking-widest text-center">
            Portfolios
          </p>
          <p className="flex uppercase tracking-widest text-center pb-4">
            To see current open positions, click Exit Date to sort. For the most
            up-to-date portfolio information, visit the
            <Link href="https://finance.tradesmith.com/publisher/23?portfolioId=169">
              <a className="mx-1 text-[#007bff] hover:text-[#0056b3] hover:underline hover:decoration-[#0056b3]">
                Parabolic profits
              </a>
            </Link>
            on <p className="mx-1 italic">TradeSmith</p> Finance.
          </p>
          <iframe
            className="w-[1000px] h-[623px] outline-none"
            src="https://pubs.tradesmith.com/?org=1&widget=6d5bebb3-7417-484d-a409-b5a5f2c46196"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolios;
