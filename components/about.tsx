import { Shield, Home, Clock, Award } from 'lucide-react';
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Protection',
      description:
        'Over 10 years of experience protecting homes and businesses from unwanted pests.',
    },
    {
      icon: Home,
      title: 'Local Expertise',
      description:
        'Deep understanding of local pest challenges and the most effective solutions for our climate.',
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description:
        "Same-day service available because we know pest problems can't wait.",
    },
    {
      icon: Award,
      title: 'Guaranteed Results',
      description:
        "Backed by our satisfaction guarantee - we don't rest until the problem is solved.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className=" text-3xl md:text-5xl font-plarfairDisplay font-bold mb-4">
          Your Trusted Partner in Pest Control
        </h2>
        <p className="text-sm font-poppins md:text-lg text-textColor opacity-70 max-w-3xl mx-auto mb-8">
          Since our founding, we&apos;ve been committed to providing superior
          pest control services that protect your home and family. Our certified
          technicians combine years of experience with the latest pest control
          technologies to deliver results you can trust.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border border-[#972F7C]">
              <div className="flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 text-[#344C76] mb-4" />
                <h3 className="text-lg font-semibold mb-2 font-plarfairDisplay">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-Color opacity-75 font-poppins">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 font-plarfairDisplay">
            Our Commitment
          </h3>
          <p className="text-lg text-textColor max-w-3xl mx-auto font-poppins">
            We take pride in being more than just a pest control service -
            we&apos;re your partners in creating a safe, pest-free environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
