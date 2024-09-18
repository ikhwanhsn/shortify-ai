import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1>Hello, Next.js</h1>
      <Link href="/generate" className="btn btn-primary text-white">
        Generate now!
      </Link>
    </main>
  );
}
