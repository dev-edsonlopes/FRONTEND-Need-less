import logo from "../../assets/logo.svg";
import NavLink from "./NavLink";
import Sign from "./Sign-in";

export default function Header() {
  return (
    <header className="shadow shadow-black-500/40 flex h-32 w-full items-center justify-between bg-background Header-50 px-12">
      <img src={logo} alt="logo-need-less" />
      <nav className="flex h-8 w-96 justify-around font-sans text-lg font-medium">
        <NavLink href="/contatos">Contatos</NavLink>
        <Sign />
        <NavLink
          className="flex items-center rounded-lg bg-secondary-600 p-3 text-50 shadow-xl font-bold"
          href="/cadastro"
        >
          Cadastre-se
        </NavLink>
      </nav>
    </header>
  );
}
