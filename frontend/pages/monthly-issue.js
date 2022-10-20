import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { fetcher } from "../lib/api";
import { useFetchUser } from "../lib/authContext";

const MonthlyPostsList = ({ posts }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <Posts posts={posts} />
    </Layout>
  );
};

export default MonthlyPostsList;

export async function getStaticProps() {
  const postsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/monthly-posts`
  );

  return {
    props: {
      posts: postsResponse,
    },
  };
}
