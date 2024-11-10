import { Check, Phone } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PricingPage() {
  return (
    <>
      <div className="grid mx-[2%] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 bg-[#C10055] rounded-lg p-5">
        <div>
          <h2 className=" text-white font-plarfairDisplay font-medium text-5xl my-4">
            Get Rid of Pests, Not Your Savings
          </h2>
          <p className="text-white my-4">
            Professional pest control shouldn&apos;t break the bank. Our
            straightforward $99 treatment plan gives you peace of mind and a
            pest-free home. No hidden fees, no surprises – just effective pest
            control at a price that makes sense.
          </p>
          <Button className=" bg-white text-black hover:bg-slate-200">
            Call Now <Phone className="h-4 w-4" />
          </Button>
        </div>
        <div className="">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <Badge variant="secondary" className="text-sm font-medium">
                  Complete Protection Plan
                </Badge>
              </div>
              <CardTitle className="text-5xl font-bold">
                $99
                {/* <span className="text-xl font-normal text-muted-foreground">
              /only
            </span> */}
              </CardTitle>
              <CardDescription>Per Treatment</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  'Treatment of all entry points',
                  'Targeted pest elimination',
                  'Child and pet-safe solutions',
                  'Same-day service available',
                  'Common pest coverage included',
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
