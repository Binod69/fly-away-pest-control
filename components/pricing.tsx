import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PricingPage() {
  return (
    <>
      <div className="grid mx-[2%] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 className="font-poppins text-5xl">
            Get Rid of Pests, Not Your Savings
          </h2>
          <p>
            Professional pest control shouldn&apos;t break the bank. Our
            straightforward $99 treatment plan gives you peace of mind and a
            pest-free home. No hidden fees, no surprises – just effective pest
            control at a price that makes sense.
          </p>
        </div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
    </>
    // <div className="min-h-screen bg-[#F2D78C] rounded-sm flex flex-col items-center justify-center p-4">
    //   <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
    //     <h2 className="text-4xl font-poppins font-extrabold tracking-tight lg:text-5xl">
    //       Get Rid of Pests, Not Your Savings
    //     </h2>
    //     <p className="text-xl text-muted-foreground">
    //       Professional pest control shouldn&apos;t break the bank. Our
    //       straightforward $99 treatment plan gives you peace of mind and a
    //       pest-free home. No hidden fees, no surprises – just effective pest
    //       control at a price that makes sense.
    //     </p>
    //   </div>

    //   <Card className="w-full max-w-md">
    //     <CardHeader>
    //       <div className="flex justify-between items-center">
    //         <Badge variant="secondary" className="text-sm font-medium">
    //           Standard Plan
    //         </Badge>
    //       </div>
    //       <CardTitle className="text-5xl font-bold">
    //         $99
    //         {/* <span className="text-xl font-normal text-muted-foreground">
    //           /only
    //         </span> */}
    //       </CardTitle>
    //       <CardDescription>
    //         The perfect plan for getting started with our product.
    //       </CardDescription>
    //     </CardHeader>
    //     <CardContent>
    //       <ul className="space-y-2">
    //         {[
    //           'Unlimited projects',
    //           '24/7 customer support',
    //           'Advanced analytics',
    //           'API access',
    //         ].map((feature) => (
    //           <li key={feature} className="flex items-center">
    //             <Check className="h-5 w-5 text-primary mr-2" />
    //             <span>{feature}</span>
    //           </li>
    //         ))}
    //       </ul>
    //     </CardContent>
    //     <CardFooter>
    //       <Button className="w-full">Call Now</Button>
    //     </CardFooter>
    //   </Card>
    // </div>
  );
}
