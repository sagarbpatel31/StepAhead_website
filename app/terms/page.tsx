import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "Terms of Service — StepAhead" };

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-40 md:px-12 md:pt-48 lg:px-8 lg:pt-52">
        <h1 className="font-sans text-3xl font-bold text-brand-deep md:text-4xl">Terms of Service</h1>
        <p className="mt-4 font-sans text-sm text-brand-deep/50">Last updated: May 2026</p>
        <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-brand-deep/80">
          <p>
            StepAhead is currently in pre-launch. Full terms of service will be published prior to the
            general availability of the app. By joining the waitlist you agree that we may contact you
            with product updates.
          </p>
          <p>
            For questions, reach us at{" "}
            <a href="mailto:stepahead.app@gmail.com" className="underline hover:text-brand-deep">
              stepahead.app@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
