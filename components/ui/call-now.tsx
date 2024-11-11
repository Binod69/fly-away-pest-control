import { Phone } from 'lucide-react';

const CallNowBtn = ({ className }: { className?: string }) => {
  const phoneNumber = '+61 469 114 477';
  return (
    <>
      <a className={className} href={`tel:${phoneNumber}`}>
        <span className="text-sm font-medium font-poppins text-center">
          {' '}
          Call Now
        </span>

        <Phone className="h-4 w-4 " />
      </a>
    </>
  );
};

export default CallNowBtn;
