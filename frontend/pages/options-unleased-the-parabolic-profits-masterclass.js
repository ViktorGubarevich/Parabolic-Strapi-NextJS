import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";

const Masterclass = () => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <div className="min-w-[1140px] px-4 flex flex-col font-light">
        <div className="flex flex-col">
          <div className="text-4xl font-thin mb-5 uppercase tracking-widest">
            Options unleashed
          </div>
          <iframe
            className="w-full h-[623px] outline-none"
            src="//fast.wistia.net/embed/iframe/72wly3lnl2?videoFoam=true"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Masterclass;
