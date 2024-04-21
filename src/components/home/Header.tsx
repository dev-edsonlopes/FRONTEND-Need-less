import logo from "../../assets/logo.svg";
import NavLink from "./NavLink";
import Sign from "./Sign-in";

export default function Header() {
  return (
    <header className="flex h-32 w-full items-center justify-between bg-backgroundHeader-50 px-12">
      <img src={logo} alt="logo-need-less" />
      <nav className="flex h-8 w-96 justify-around font-sans text-lg font-medium">
        <NavLink href="/contatos">Contatos</NavLink>
        <Sign />
        <NavLink
          className="flex items-center rounded-lg bg-black p-3 font-bold text-50 shadow-xl"
          href="/cadastro"
        >
          Cadastre-se
        </NavLink>
      </nav>
    </header>
  );
}
