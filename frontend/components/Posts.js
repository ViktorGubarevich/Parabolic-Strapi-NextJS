import ReactMarkdown from "react-markdown";

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
                <div className="flex flex-col min-w-[823px] bg-white rounded-lg p-5 mb-5 last:mb-0">
                  <p className="mb-5 uppercase font-thin tracking-widest hover:underline hover:decoration-[#0056b3]">
                    <Link href={`post/` + post.attributes.slug}>
                      {post.attributes.title}
                    </Link>
                  </p>
                  <div className="flex mb-1.5 text-xs italic font-['Open-Sans']">
                    <p className="pr-1">By:</p>
                    <p className="font-semibold">{post.attributes.edition}</p>
                  </div>
                  <p className="mb-4 text-xs uppercase tracking-wider">
                    <p className="font-['Helvetica']">
                      {toLocaleDate(post.attributes.published)} |{" "}
                      {post.attributes.tab}
                    </p>
                  </p>
                  <p className="mb-4 text-lg font-['Open-Sans'] leading-5 text-ellipsis overflow-hidden h-20">
                    <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
                  </p>
                  <Link href={`post/` + post.attributes.slug}>
                    <a className="flex items-center w-fit text-xs uppercase px-4 mb-4 h-7 text-black font-semibold bg-[#edf3ff] rounded-full hover:bg-[#ffb80b] shadow-[0_4px_6px_0px_rgba(50,50,93,0.11)]">
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
