import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/images/logo.png" alt="Da Nang Home" width={56} height={56} className="h-12 w-12" />
      <span className="text-2xl font-bold">Da Nang Home</span>
    </Link>
  );
}
