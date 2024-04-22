import { cookies } from 'next/headers';

export default function Cookies() {
  const cookieStore = cookies();

  return '...';
}
