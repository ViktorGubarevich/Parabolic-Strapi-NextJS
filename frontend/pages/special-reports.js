import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { fetcher } from "../lib/api";
import { useFetchUser } from "../lib/authContext";

const SpecialPostsList = ({ posts }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <Posts posts={posts} />
    </Layout>
  );
};

export default SpecialPostsList;

export async function getStaticProps() {
  const postsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/special-posts`
  );

  return {
    props: {
      posts: postsResponse,
    },
  };
}