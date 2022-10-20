import Link from "next/link";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import { fetcher } from "../lib/api";
import { useFetchUser } from "../lib/authContext";

const MikeBurnick = ({ abouts }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <div className="min-w-[1140px] px-4 flex flex-col font-light">
        <div className="flex">
          <Link href="/about">
            <a className="text-4xl font-thin mb-5 uppercase tracking-widest text-[#007bff] hover:text-[#0056b3] hover:underline hover:decoration-[#0056b3]">
              <span>{abouts[0].attributes.title}</span>
            </a>
          </Link>
          <Link href="/mike-burnick">
            <a className="text-4xl font-thin pl-14 uppercase tracking-widest pointer-events-none">
              <span>{abouts[1].attributes.title}</span>
            </a>
          </Link>
        </div>
        <div className="flex">
          <div id="margin" className="text-base leading-5 pr-10">
            <ReactMarkdown>{abouts[1].attributes.about}</ReactMarkdown>
          </div>
          <div className="min-w-[400px]">
            <ReactMarkdown>{abouts[1].attributes.image}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MikeBurnick;

export async function getServerSideProps() {
  const aboutsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/abouts`
  );

  return {
    props: {
      abouts: aboutsResponse.data,
    },
  };
}
