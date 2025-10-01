"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { notFoundData } from "@/lib/fakes/not-found-fakes";

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
      <div className="max-w-2xl mx-auto text-center mt-50">
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
            {notFoundData.title}
          </h1>
          <p className="text-semi-header text-white/90 mb-6">
            {notFoundData.subtitle}
          </p>
          <p className="text-body text-white/80">
            {notFoundData.description}
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
