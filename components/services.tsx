import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {
  Bug,
  BugOff,
  Rat,
  Home,
  Building2,
  TreeDeciduous,
  Shield,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Bug,
      title: 'General Pest Control',
      description:
        'Comprehensive treatment for common household pests including ants, roaches, and beetles.',
      features: [
        'Interior and exterior treatments',
        'Preventive barrier protection',
        'Entry point inspection and sealing',
        'Quarterly maintenance available',
      ],
    },
    {
      icon: BugOff,
      title: 'Spider Control',
      description:
        'Specialized removal and prevention of spiders and web elimination.',
      features: [
        'Web removal from structures',
        'Treatment of common hiding spots',
        'Preventive treatments',
        'Safe removal of dangerous species',
      ],
    },
    {
      icon: Rat,
      title: 'Rodent Control',
      description:
        'Complete rodent elimination and prevention services for mice and rats.',
      features: [
        'Entry point identification',
        'Safe baiting and trapping',
        'Exclusion services',
        'Prevention recommendations',
      ],
    },
    {
      icon: Home,
      title: 'Residential Services',
      description:
        'Customized pest control solutions for homeowners and renters.',
      features: [
        'Whole home inspection',
        'Custom treatment plans',
        'Child and pet-safe methods',
        'Regular monitoring',
      ],
    },
    {
      icon: Building2,
      title: 'Commercial Services',
      description:
        'Professional pest management for businesses and commercial properties.',
      features: [
        'Industry-specific solutions',
        'Health code compliance',
        'Documentation and reporting',
        'Emergency response available',
      ],
    },
    {
      icon: TreeDeciduous,
      title: 'Outdoor Pest Control',
      description: 'Protect your yard and outdoor spaces from invasive pests.',
      features: [
        'Yard treatment programs',
        'Mosquito reduction',
        'Tick control',
        'Seasonal treatments',
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 my-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-plarfairDisplay font-bold mb-4">
          Professional Pest Control Services
        </h2>
        <p className="text-sm md:text-lg text-textColor opacity-70 max-w-3xl mx-auto">
          We offer comprehensive pest control solutions tailored to your
          specific needs. Our expert technicians use the latest techniques and
          environmentally responsible products to keep your space pest-free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-[#2F4858] mr-3" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Shield className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Schedule your inspection today and take the first step towards a
            pest-free environment.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
