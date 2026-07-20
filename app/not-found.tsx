import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[60vh] flex items-center justify-center px-4 bg-[#f5f5f3]">
        <div className="text-center max-w-md">
          <p className="text-[#356df3] font-extrabold text-[10px] tracking-widest uppercase mb-3">404</p>
          <h1 className="font-display text-4xl font-bold text-[#202020] mb-4" style={{ letterSpacing: "-0.04em" }}>Page not found</h1>
          <p className="text-[#777773] mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#333] text-white font-semibold px-7 py-3.5 rounded-[10px] transition-all shadow-sm text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
