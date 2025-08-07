export default function Header() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <div className="text-lg font-semibold">Micro Invoice</div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-blue-600">
          Sign Up
        </a>
        <a href="#" className="text-gray-600">
          Log In
        </a>
      </div>
      <button className="md:hidden">{/* hamburger icon */}</button>
    </nav>
  );
}
