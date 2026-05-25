import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "Copyright — StepAhead" };

export default function CopyrightPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-40 md:px-12 md:pt-48 lg:px-8 lg:pt-52">
        <h1 className="font-sans text-3xl font-bold text-brand-deep md:text-4xl">Copyright</h1>
        <p className="mt-4 font-sans text-sm text-brand-deep/50">© 2026 StepAhead</p>
        <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-brand-deep/80">
          <p>
            All content on this website — including text, graphics, logos, images, and software — is
            the property of StepAhead and is protected by applicable copyright laws.
          </p>
          <p>
            Unauthorised reproduction, distribution, or use of any materials from this site without
            prior written permission is prohibited.
          </p>
          <p>
            For licensing inquiries, reach us at{" "}
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
