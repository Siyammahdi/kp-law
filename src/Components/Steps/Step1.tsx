"use client";
import React, { useState } from "react";
import Form from "../Form/Form";
import TooltipComponent from "../Tooltip";

const Step1: React.FC = () => {
  // issue selection state
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const handleDiseaseSelection = (label: string) => {
    setSelectedDisease(label === selectedDisease ? null : label);
  };

  // time selection state
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const handleDurationSelection = (label: string) => {
    setSelectedDuration(label === selectedDuration ? null : label);
  };

  return (
    <div className="max-w-6xl lg:mx-auto mx-6 py-8 text-white">
      <h2 className="text-2xl font-bold mb-4">Our Guarantee to you:</h2>
      <div className="flex justify-between">
        <ul className="list-inside list-none mb-4 space-y-2">
          <li>
            <span className="bg-button px-2 rounded-full mr-5">1</span>There is
            a no-win no-fee process.
          </li>
          <li>
            <span className="bg-button px-2 rounded-full mr-5">2</span>You are
            signing with a UK-registered Law Firm called KP Law.
          </li>
          <li>
            <span className="bg-button px-2 rounded-full mr-5">3</span>You will
            deal with UK-based legal professionals in person.
          </li>
        </ul>
        <div>
          <TooltipComponent />
        </div>
      </div>
        
      <Form />
    </div>
  );
};

export default Step1;



