import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';


const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center pt-10 text-white">
      <div className="container mx-auto px-4">
        <div className=" gap-8">
          <div className="max-w-full mx-auto">
            <ul className="">
              {accordionData.map((item, index) => (
                <li key={index} className="relative border-b border-gray-200">
                  <button
                    type="button"
                    className="w-full px-6 py-6 text-left"
                    onClick={() => toggle(index)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.title}</span>
                      <FaChevronDown
                        className={`w-5 h-5 text-white transition-transform duration-600 ${
                          selected === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  <Transition
                    show={selected === index}
                    enter="transition-all duration-500"
                    enterFrom="max-h-0"
                    enterTo="max-h-96"
                    leave="transition-all duration-500"
                    leaveFrom="max-h-96"
                    leaveTo="max-h-0"
                  >
                    <div className="px-6 pb-6 overflow-hidden">
                      <p>{item.content}</p>
                    </div>
                  </Transition>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const accordionData = [
  {
    title: 'Damages Based Agreement',
    content: `DreamSeat Enterprise Xperience Partners shall issue a full refund to any member who wishes to cancel their enrolment within 45 days prior to the start of the season. Stadium seat memberships are not refundable after the first home event of the football season. If a patron's seat is damaged or removed, DreamSeat EXP shall replace the item at no cost to the customer. Please contact the customer service hotline (864-626-9676) with any questions regarding the return policy. All sales are final. Refunds and adjustments will be considered on an individual basis.`,
  },
  {
    title: "Litigation management Agreement",
    content: `If you are unable to log in, please make sure you have created a new account first. This ordering portal is different than the one where you purchase your Texas A&M game tickets.`,
  },
  {
    title: 'Data Subject Access Request Authority',
    content: `Game day seats are rentals will be in place for the first game of the season, unless you are in sections 409-421. Those sections will have game day seats mid way through the football season.`,
  },
];

export default Accordion;
