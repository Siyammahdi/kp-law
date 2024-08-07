import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="hidden lg:block">
      <div className="py-4">
        <div className="flex justify-between h-16">
          <div className="mx-16">
            <Image src="/logo.png" height={200} width={200} alt="Logo" />
          </div>
          <div className="flex items-center">
            <div className="text-white space-x-5">
              <Link href="/" passHref>
                Home
              </Link>
              <Link href="/about" passHref>
                About
              </Link>
              <Link href="/contact" passHref>
                Contact
              </Link>
            </div>
            <div className="items-center mx-8">
              <button className="px-4 py-2 bg-button text-white rounded">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
