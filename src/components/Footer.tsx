const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Codefinity Solutions. All Rights
            Reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <ul>
            <li className="text-sm md:text-base">
              Email: admin@codefinitySol.com
            </li>
            <li className="text-sm md:text-base">Phone: +1 (512) 123-4567</li>
            <li className="text-sm md:text-base">Location: Austin, TX, USA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
