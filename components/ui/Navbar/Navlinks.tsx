'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import Logo from '@/components/icons/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import s from './Navbar.module.css';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">KitFolio</h1>
          <div className="flex justify-bottom space-x-8">
          <div className="space-x-4 py-2">
            <a href="#features" className="hover:text-[#4cc9f0]">Features</a>
            <a href="#pricing" className="hover:text-[#4cc9f0]">Pricing</a>
            <a href="#contact" className="hover:text-[#4cc9f0]">Contact</a>
            {user && (
              <Link href="/account" className={s.link}>
                Account
              </Link>
            )}
          </div>
            {user ? (
              <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
              <input type="hidden" name="pathName" value={usePathname()} />
              <button type="submit" className={s.link}>
                Sign out
              </button>
            </form>
            ) : (
              <Link href="/signin">
                <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300 ml-4">
                  Login
                </button>
              </Link>
              )}
        </div>
        </nav>
      </div>
    </div>
  );
}
