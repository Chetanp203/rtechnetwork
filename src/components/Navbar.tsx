// components/Navbar.tsx
import * as Menubar from '@radix-ui/react-menubar';
import Link from 'next/link';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from "next/image";

const Navbar = () => {

  return (
    <nav className="bg-blue-500 p-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/rtech.png"
            alt="Brand Logo"
            width={120}
            height={40}
            className="h-auto w-auto" // Ensures it scales properly
          />
        </Link>

        {/* Menu for desktop */}
        <Menubar.Root className="hidden lg:flex items-center space-x-8">
          <Menubar.Menu>
            <Link href="/company">
              <Menubar.Trigger className="text-white hover:text-gray-300">
                Our Company
              </Menubar.Trigger>
            </Link>
          </Menubar.Menu>
          <Menubar.Menu>
            <Link href="/offerings">
              <Menubar.Trigger className="text-white hover:text-gray-300">
                Our Offerings
              </Menubar.Trigger>
            </Link>
          </Menubar.Menu>
          <Menubar.Menu>
            <Link href="/careers">
              <Menubar.Trigger className="text-white hover:text-gray-300">
                Careers
              </Menubar.Trigger>
            </Link>
          </Menubar.Menu>
          <Menubar.Menu>
            <Link href="/contact">
              <Menubar.Trigger className="text-white hover:text-gray-300">
                Contact Us
              </Menubar.Trigger>
            </Link>
          </Menubar.Menu>
        </Menubar.Root>


        {/* Mobile Menu */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="lg:hidden text-white hover:bg-blue-700 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white text-black shadow-lg rounded p-2 z-10">
              <DropdownMenu.Item>
                <Link href="/company" passHref>
                  <span className="block p-2 hover:bg-gray-200">Our Company</span>
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/offerings" passHref>
                  <span className="block p-2 hover:bg-gray-200">Our Offerings</span>
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/careers" passHref>
                  <span className="block p-2 hover:bg-gray-200">Careers</span>
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/contact" passHref>
                  <span className="block p-2 hover:bg-gray-200">Contact Us</span>
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
      </div>
    </nav>
  );
};

export default Navbar;
