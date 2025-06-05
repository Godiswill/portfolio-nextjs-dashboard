import { testDelay } from '@/app/lib/data';
export default async function Page() {
  const revenue = await testDelay();

  return <p>Customers Page</p>;
}
