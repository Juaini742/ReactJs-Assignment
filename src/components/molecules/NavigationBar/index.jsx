function Navbar() {
  return (
    <>
      <header className="fixed w-full flex z-50 top-0">
        <nav className="flex container bg-warning/30 backdrop-blur-lg rounded-full p-5 justify-between">
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
