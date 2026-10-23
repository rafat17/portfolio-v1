import Link from "next/link";

export const metadata = { title: "Page Not Found | Rafatul Alam" };

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-8xl sm:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-gray-300 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 px-6 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}