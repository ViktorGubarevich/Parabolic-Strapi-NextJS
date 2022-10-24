import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import { fetcher } from "../lib/api";
import { useFetchUser } from "../lib/authContext";

const Portfolios = ({ portfolio }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <div className="min-w-[1500px] px-4 flex flex-col font-light">
        <div className="flex flex-col justify-center justify-items-center content-center items-center">
          <div className="text-4xl font-thin mb-5 uppercase tracking-widest text-center">
            {portfolio[0].attributes.title}
          </div>
          <div
            id="link"
            className="flex uppercase tracking-wider text-center pb-4"
          >
            <ReactMarkdown>{portfolio[0].attributes.subtitle}</ReactMarkdown>
          </div>
          <ReactMarkdown>{portfolio[0].attributes.content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolios;

export async function getServerSideProps() {
  const portfolioResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios`
  );

  return {
    props: {
      portfolio: portfolioResponse.data,
    },
  };
}
