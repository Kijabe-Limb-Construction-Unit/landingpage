"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

// Reusable button component
const ActionButton = ({ 
  children, 
  onClick, 
  href, 
  variant = "primary" 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  href?: string; 
  variant?: "primary" | "secondary" 
}) => {
  const baseClasses = "flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors";
  const variantClasses = variant === "primary" 
    ? "bg-white text-[#003683] hover:bg-white/90" 
    : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#003683]";
  
  const className = `${baseClasses} ${variantClasses}`;
  
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4FB29E] via-[#149ECC] to-[#003683] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation/Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-9xl font-bold text-white/20 mb-4">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/butterfly.svg"
                alt="Butterfly"
                width={80}
                height={80}
                className="animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-header font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-semi-header text-white/90 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-body text-white/80">
            Don't worry, we'll help you find your way back to the right place.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <ActionButton href="/" variant="primary">
            <Home className="w-5 h-5" />
            Go Home
          </ActionButton>
          
          <ActionButton onClick={() => window.history.back()} variant="secondary">
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </ActionButton>
        </div>

        {/* Quick Links */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-body font-semibold text-white mb-4">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/about"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/patient-stories"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded transition-colors"
            >
              Patient Stories
            </Link>
            <Link
              href="/patient-resources"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/donate"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-white/70">
          <p className="text-body">
            Need help? Contact us at{" "}
            <a href="mailto:info@kijabehospital.org" className="text-white hover:underline">
              info@kijabehospital.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
