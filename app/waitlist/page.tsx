import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata = { title: "Join the Waitlist — StepAhead" };

export default function WaitlistPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-brand-tint flex items-center justify-center px-6 py-32 md:px-12 lg:px-20">
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

          {/* Left — dark panel */}
          <div className="bg-brand-deep px-10 py-12 lg:w-[45%] flex flex-col justify-center gap-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/60">
              Be First In Line
            </p>
            <h1 className="font-sans text-4xl font-bold text-white lg:text-5xl">
              Join the Waitlist
            </h1>
            <p className="font-sans text-base text-white/80 leading-relaxed">
              Get early access to StepAhead — the AI-powered app that tracks your baby&apos;s motor development and gives you expert insights at your fingertips.
            </p>
            <ul className="space-y-3">
              {[
                "Early access before public launch",
                "Personalized AI insights for your baby",
                "We respect your inbox — unsubscribe anytime",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-white/90">
                  <span className="mt-0.5 shrink-0 text-brand-orange">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form panel */}
          <div className="bg-white px-10 py-12 lg:w-[55%] flex flex-col justify-center gap-6">
            <div>
              <h2 className="font-sans text-xl font-bold text-brand-deep">Your email</h2>
              <p className="mt-1 font-sans text-sm text-brand-deep/60">
                We will only use this to share waitlist news and product updates.
              </p>
            </div>
            <WaitlistForm />
            <p className="font-sans text-xs text-brand-deep/50">
              By joining, you agree we may email you about StepAhead.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
