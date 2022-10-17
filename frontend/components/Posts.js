import Link from "next/link";
import { toLocaleDate } from "../utils/dateTime";

const Posts = ({ posts }) => {
  return (
    <>
      <ul className="list-none space-y-4 text-4xl mb-3">
        {posts &&
          posts.data.map((post) => {
            return (
              <li key={post.id}>
                <div className="flex flex-col bg-white rounded-lg p-5 mb-5 last:mb-0">
                  <h1 className="mb-5 uppercase font-thin tracking-wider hover:underline hover:decoration-[#0056b3]">
                    <Link href={`post/` + post.attributes.slug}>
                      {post.attributes.title}
                    </Link>
                  </h1>
                  <p className="mb-1.5 text-sm italic font-light">
                    By: <strong>{post.attributes.edition}</strong>
                  </p>
                  <p className="mb-4 text-xs uppercase font-thin tracking-wider">
                    {toLocaleDate(post.attributes.published)} |{" "}
                    {post.attributes.tab}
                  </p>
                  <p className="mb-4 text-sm font-normal text-ellipsis overflow-hidden h-20 font-sans">
                    {post.attributes.info}
                  </p>
                  <Link href={`post/` + post.attributes.slug}>
                    <a
                      className="flex items-center w-fit text-xs uppercase px-4 mb-4 h-7 text-black font-semibold bg-[#edf3ff] rounded-full hover:bg-[#ffb80b] shadow-[0_4px_6px_0px_rgba(50,50,93,0.11)]"
                    >
                      Read full article
                    </a>
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Posts;
