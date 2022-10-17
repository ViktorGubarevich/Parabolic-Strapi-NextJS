import Link from "next/link";
import { useRouter } from "next/router";
import { unsetToken } from "../lib/auth";

const Nav = () => {
  const router = useRouter();

  const logout = () => {
    unsetToken();
    router.push("/");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white shadow-[0_4px_8px_0px_rgba(0,0,0,0.25)] fixed">
      <div>
        <Link href="/">
          <a>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="m-3"
              src="/parabolic-logo-nav.png"
              width={200}
              height={50}
              alt="Parabolic Logo"
            />
          </a>
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/200/svg"
        id="menu-button"
        className="h6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 space-x-2">
          <li>
            <Link href="/">
              <a className="p-4 block hover:bg-[#ffb80b]">
                WEEKLY UPDATES & ALERTS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="p-4 block hover:bg-[#ffb80b]">MONTHLY ISSUES</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a className="p-4 block hover:bg-[#ffb80b]">PORTFOLIO</a>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <a className="p-4 block hover:bg-[#ffb80b]">SPECIAL REPORTS</a>
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>
              <a className="p-4 block hover:bg-[#ffb80b]">MASTER CLASS</a>
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>
              <a className="p-4 block hover:bg-[#ffb80b]">ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>
              <a className="p-4 block hover:bg-[#ffb80b]">FAQ</a>
            </Link>
          </li>
        </ul>
        <a
          className="ml-2.5 py-1.5 px-5 block text-white font-semibold hover:text-[#212b38] bg-[#00ae42] rounded-full hover:bg-[#50ce50]"
          onClick={logout}
          style={{ cursor: "pointer" }}
        >
          LOGOUT
        </a>
      </div>
    </nav>
  );
};

export default Nav;
