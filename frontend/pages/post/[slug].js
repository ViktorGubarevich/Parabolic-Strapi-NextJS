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
        <p className="mb-5 uppercase text-4xl font-thin tracking-wider">
          {post.attributes.title}
        </p>
        <div className="flex mb-5 text-xs italic font-light">
          <p className="pr-1">By:</p>
          <p className="font-semibold">{post.attributes.edition}</p>
        </div>
        <p className="mb-4 text-xs uppercase font-thin tracking-wider">
          {toLocaleDate(post.attributes.published)} | {post.attributes.tab}
        </p>
        {/* <audio controls>
          <source
            type="audio/mpeg"
            src="https://s3.us-east-1.amazonaws.com/audio-for-wordpress-1359541680916e800764b241c37db29c3a9e38ed/2022/10/amazon_polly_8184.mp3?version=1666276118"
          />
        </audio> */}
        {/* <iframe
          src="https://tpp.tradesmith.com/wp-content/plugins/pdfjs-viewer-shortcode/pdfjs/web/viewer.php?file=https://tpp.tradesmith.com/wp-content/uploads/2022/09/TPP-Code-newsletter-No3.pdf&amp;attachment_id=8167&amp;dButton=true&amp;pButton=true&amp;oButton=false&amp;sButton=true#zoom=auto&amp;pagemode=thumbs&amp;_wpnonce=bcfbf765a8"
          title="Embedded PDF"
          class="pdfjs-iframe"
          width="100%"
          height="800px"
        ></iframe> */}
        <div
          id="margin"
          className="tracking-wid font-['Open-Sans'] text-lg leading-none"
        >
          <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
        </div>
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
