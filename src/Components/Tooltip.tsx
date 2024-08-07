import Image from 'next/image';
import { useState } from 'react';

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative mt-20 md:mt-0 focus:outline-none focus:ring-gray-300 rounded-full focus:ring-offset-2 focus:ring-2 focus:bg-gray-200"
      onMouseOver={() => setShowTooltip(true)}
      onMouseOut={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <div className="cursor-pointer">
            <Image src="/info.svg" alt='info' height={40} width={40} />
      </div>
      {showTooltip && (
        <div
          role="tooltip"
          className="z-20 absolute -top-0 right-6 mt-8 ml-8 w-28 rounded-full p-2 text-sm text-background bg-[#D7D7ED] shadow-lg"
        >
          {text}
        </div>
      )}
    </div>
  );
};

const TooltipComponent: React.FC = () => {
  return (
    <div className="py-10 h-full w-full">
      <div className="container mx-auto px-6 flex flex-col items-start pl-6 md:pl-0 md:items-center">
        <Tooltip text="Find out more" />
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default TooltipComponent;
