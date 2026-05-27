import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "Features — StepAhead" };

export default function FeaturesPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-40 md:px-12 md:pt-48 lg:px-8 lg:pt-52">
        <h1 className="font-sans text-3xl font-bold text-brand-deep md:text-4xl">Features</h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-brand-deep/70">
          Coming soon — full feature details will be added here.
        </p>
      </main>
      <Footer />
    </>
  );
}
