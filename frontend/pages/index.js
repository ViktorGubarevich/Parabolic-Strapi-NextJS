import Layout from "../components/Layout";
import Login from "../components/Login";
import Posts from "../components/Posts";
import { fetcher } from "../lib/api";
import { useFetchUser } from "../lib/authContext";

const Home = ({ posts }) => {
  const { user, loading } = useFetchUser();

  return (
    <>
      {user ? (
        <Layout user={user}>
          <Posts posts={posts} />
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const postsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`
  );

  return {
    props: {
      posts: postsResponse,
    },
  };
}
