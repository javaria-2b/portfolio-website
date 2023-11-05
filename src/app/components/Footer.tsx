// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-500 text-white text-center p-4">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Javaria Shaukat Portfolio Website
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
        <div className="flex justify-center mt-2">
          {/* Social media icons or links would go here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
