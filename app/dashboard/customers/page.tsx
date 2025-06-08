import { testDelay } from '@/app/lib/data';
export default async function Page() {
  await testDelay();

  return <p>Customers Page</p>;
}
