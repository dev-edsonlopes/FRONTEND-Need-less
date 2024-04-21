import footerLogo from "../../assets/logo-full.svg"

export default function Footer() {
  return (
  <footer className="h-60 flex flex-col justify-center items-center">
    <img src={footerLogo} alt="footer-logo" />
    <hr className="w-3/4 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400" />
  </footer>
);
}
