import { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export default function Card({ title, description, footer, children }: Props) {
  return (
    <>
    <Head>
        <title>Login - KitFolio</title>
        <meta name="description" content="Login to your KitFolio account" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#3a0ca3] to-[#4361ee] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-[#3a0ca3] mb-6">Login to KitFolio</h2>
            {children}
          </div>
          <div className="bg-gray-50 px-4 py-3 text-center">
            <a href="#" className="text-sm text-[#3a0ca3] hover:text-[#4c1cd4] hover:underline">Forgot password?</a>
          </div>
        </div>
      </div>
      </>
    /*<div className="min-h-screen bg-[#3a0ca3] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-bold text-center text-[#3a0ca3] mb-6">Login to KitFolio</h2>
        <p className="text-zinc-300">{description}</p>
        {children}
      </div>
      {footer && (
        <div className="p-4 border-t rounded-b-md border-zinc-700 bg-zinc-900 text-zinc-500">
          {footer}
        </div>
      )}
    </div>*/
  );
}
