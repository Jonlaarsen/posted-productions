'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear the 'isLoggedin' cookie
    document.cookie = 'isLoggedin=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    // Redirect to the login page
    router.push('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-10 text-2xl border-2 px-4 py-2 cursor-pointer"
    >
      Logout
    </button>
  );
}
