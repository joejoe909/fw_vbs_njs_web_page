// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;