import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Desktop Layout (md and above) */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Brand Info */}
            <div className="col-span-5">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-600 rounded-md mr-3"></div>
                <span className="text-2xl font-bold">Zgrad</span>
              </div>
              <div className="space-y-1 text-lg">
                <p>Learn by doing.</p>
                <p>Grow with mentors.</p>
                <p>Land your dream job.</p>
              </div>
            </div>

            {/* Middle Columns - Links */}
            <div className="col-span-7 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {[
                    "About Us",
                    "Contact Us",
                    "Terms of Use",
                    "Privacy Policy",
                  ].map((item) => (
                    <li key={item}>
                      <Link to="#" className="hover:text-blue-600">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Programs</h3>
                <ul className="space-y-2">
                  {["Fellowship", "Self-Pieced"].map((item) => (
                    <li key={item}>
                      <Link to="#" className="hover:text-blue-600">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Resources / Participate
                </h3>
                <ul className="space-y-2">
                  {["Blogs", "Apply as Mentor"].map((item) => (
                    <li key={item}>
                      <Link to="#" className="hover:text-blue-600">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="px-6 py-8">
          {/* Brand Info - Centered */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center mb-3">
              <div className="h-8 w-8 bg-blue-600 rounded-md mr-2"></div>
              <span className="text-xl font-bold">Jgrad</span>
            </div>
            <div className="space-y-1">
              <p>Learn by doing.</p>
              <p>Grow with mentors.</p>
              <p>Land your dream job.</p>
            </div>
          </div>

          {/* Links - Single Column */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-3 text-center">Company</h3>
              <ul className="space-y-2 text-center">
                {[
                  "About Us",
                  "Contact Us",
                  "Terms of Use",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-blue-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-center">Programs</h3>
              <ul className="space-y-2 text-center">
                {["Fellowship", "Self-Pieced"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-blue-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-center">
                Resources / Participate
              </h3>
              <ul className="space-y-2 text-center">
                {["Blogs", "Apply as Mentor"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-blue-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Common to both */}
      <div className="border-t border-gray-200 py-6 text-center text-sm">
        © {new Date().getFullYear()} Pixelify. All rights reserved
      </div>
    </>
  );
};

export default Footer;
