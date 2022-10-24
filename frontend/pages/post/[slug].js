import Link from "next/link";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";
import { fetcher } from "../../lib/api";
import { useFetchUser } from "../../lib/authContext";
import { toLocaleDate } from "../../utils/dateTime";

const Post = ({ post }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <div className="flex flex-col min-w-[1100px] bg-white rounded-lg p-5 mb-5">
        <div className="mb-5 uppercase text-4xl font-thin tracking-wider">
          {post.attributes.title}
        </div>
        <div className="flex mb-5 text-xs italic font-light">
          <div className="pr-1">By:</div>
          <div className="font-semibold">{post.attributes.edition}</div>
        </div>
        <div className="mb-4 text-xs uppercase font-thin tracking-wider">
          {toLocaleDate(post.attributes.published)} | {post.attributes.tab}
        </div>
        {post.attributes.audio !== null ? (
          <>
            <div className="font-extralight">Listen to this post</div>
            <audio controls>
              <source type="audio/mpeg" src={post.attributes.audio} />
            </audio>
          </>
        ) : (
          ""
        )}
        <div
          id="margin"
          className="tracking-wid font-['Open-Sans'] text-lg leading-none"
        >
          <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
        </div>        
        {post.attributes.pdf !== null ? (
          <>
            <Link href={post.attributes.pdf}>
              <a className="text-[#17bcb8] hover:text-[#007be0]">
                View Fullscreen
              </a>
            </Link>
            <iframe
              className="border-2 border-black h-[800px]"
              src={post.attributes.pdf}
            ></iframe>
          </>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const postResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/post/${slug}?populate=*`
  );

  return {
    props: {
      post: postResponse.data,
    },
  };
}

export default Post;
