import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#800080] py-5">
      <h1 className="text-center text-3xl text-white">
        Bursa Park Alanları Neler
      </h1>
      <nav className="flex justify-center mt-5 text-white gap-5">
        <Link to="/">Park Alanları</Link>
        <Link to="/">Parkları Göster</Link>
      </nav>
    </header>
  );
}
