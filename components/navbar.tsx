'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import CallNowBtn from './ui/call-now';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = '+1234567890';

  useEffect(() => {
    console.log('useeffect runnung');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed w-full z-50 
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? 'bg-white shadow-lg translate-y-0'
              : 'bg-white/80 backdrop-blur-sm'
          }
        `}
      >
        <section className="flex justify-between items-center mx-[2%] p-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={'/img/logo.png'}
              alt="logo.png"
              width={50}
              height={50}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200
                  after:content-[''] after:absolute after:w-full after:h-0.5 
                  after:bg-gray-900 after:left-0 after:-bottom-1 
                  after:scale-x-0 hover:after:scale-x-100 
                  after:transition-transform after:duration-300"
              >
                {item.name}
              </Link>
            ))}
            <CallNowBtn className="inline-flex items-center gap-2 rounded-full border border-[#CE1415] bg-white px-8 py-3 text-black hover:border-[#C10055] focus:outline-none focus:ring active:bg-white/90" />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="transform hover:scale-105 transition-all duration-200"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-gray-600 hover:text-gray-900 
                      transition-colors duration-200 transform hover:translate-x-2"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                <Button
                  asChild
                  className="md:hidden w-[100%] transform hover:scale-105 transition-all duration-200 hover:shadow-md hover:bg-[#D54B39] bg-brand text-white group mt-9"
                >
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4 group-hover:animate-pulse" />
                    <span>Call Now</span>
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </section>
        <Separator />
      </nav>
      <div className="h-16" /> {/* Spacer */}
    </>
  );
};

export default Navbar;
