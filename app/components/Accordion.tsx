"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  items: Array<{ title: string; content: string }>;
};

const Accordion = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-2">
      {items.map(({ title, content }, index) => (
        <div
          key={index}
          className={`border border-gray-200 ${
            activeIndex === index ? "rounded-t-lg" : "rounded-lg"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex items-center justify-between w-full bg-[var(--foreground)] text-[var(--secondary)] hover:bg-[var(--primary)] hover:text-[var(--foreground)] p-6 text-left transition-colors duration-200 ${
              activeIndex === index ? "bg-gray-100 rounded-t-lg" : "rounded-lg"
            }`}
          >
            <span className="font-medium">{title}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              activeIndex === index ? "max-h-[400px]" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-[var(--foreground)] text-[var(--secondary)] rounded-b-lg">
              {content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
