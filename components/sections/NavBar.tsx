import site from "@/content/site.json";

export default function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-violet-950 text-white h-28">
      <nav className="mx-auto flex max-w-frame items-center justify-between px-20 h-full">
        <ul className="flex gap-36">
          {site.nav.links.map((l) => (
            <li key={l} className="p-2.5 flex justify-center items-center">
              <a
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white text-3xl font-bold font-['Exo_2']"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="p-4 bg-sky-50 rounded-lg outline outline-[2.71px] outline-offset-[-2.71px] outline-violet-950 flex justify-center items-center gap-4 text-blue-950 text-xl font-bold font-['Exo_2'] leading-8"
        >
          {site.nav.cta}
        </a>
      </nav>
    </header>
  );
}
