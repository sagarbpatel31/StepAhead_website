import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "Privacy Policy — StepAhead" };

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-40 md:px-12 md:pt-48 lg:px-8 lg:pt-52">
        <h1 className="font-sans text-3xl font-bold text-brand-deep md:text-4xl">Privacy Policy</h1>
        <p className="mt-4 font-sans text-sm text-brand-deep/50">Last updated: May 2026</p>
        <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-brand-deep/80">
          <p>
            StepAhead takes the privacy of your family&apos;s data seriously — especially video data
            involving children. A full privacy policy will be published prior to the general availability
            of the app.
          </p>
          <p>
            <strong>Waitlist data:</strong> we collect only your email address or phone number for the
            purpose of notifying you when StepAhead launches. We do not sell or share this data with
            third parties.
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
