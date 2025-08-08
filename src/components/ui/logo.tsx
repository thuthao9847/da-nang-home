import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <HomeIcon className="h-8 w-8 text-blue-600" />
      <span className="text-xl font-bold">Da Nang Home</span>
    </Link>
  );
}
