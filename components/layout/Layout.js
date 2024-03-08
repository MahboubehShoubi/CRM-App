import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1>Customer : CRM</h1>
        <Link href="/add-customer">Add Customer</Link>
      </header>

      <div className="main">{children}</div>

      <footer className="footer"></footer>
    </>
  );
};

export default Layout;
