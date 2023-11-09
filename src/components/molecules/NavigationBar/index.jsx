// import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="fixed w-full h-12 bg-primary/30 backdrop-blur-sm flex z-50 top-0 justify-center items-center">
        <nav className="flex w-[90%] justify-between">
          <div className="">
            <h3>logo</h3>
          </div>

          <ul className="flex justify-center gap-4  md:flex-row items-center md:static ">
            <li>
              <a href="/home" className="transition-300">
                Beranda
              </a>
            </li>
            <li>
              <a href="/purchase" className="transition-300">
                purchase
              </a>
            </li>
            <li>
              <a href="basket" className="transition-300">
                Basket
              </a>
            </li>
          </ul>

          <div className="">
            <a href="#" className="btn-outline-primary px-5">
              logout
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
