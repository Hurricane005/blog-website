import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <nav className="w-full relative flex items-center justify-between ">
      <Link className="font-bold text-3xl text-secondary-foreground" href="/">
        Hurricane<span className="text-primary">Blog</span>
      </Link>
      <DarkModeToggle />
    </nav>
  );
};
export default Navbar;
