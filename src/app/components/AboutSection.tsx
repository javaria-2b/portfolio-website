"use client";
import { useTransition } from "react";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Working</li>
        <li>Typescript</li>
        <li>Eating</li>
        <li>Sleeping</li>
        <li>Cheating</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Panaverse</li>
        <li>PIAIC</li>
        <li>ArmyPublic School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Cluod</li>
        <li>PIAIC</li>
        <li>Google</li>
      </ul>
    ),
  },
];

type Tab = "skills" | "projects" | "contact"; // Add all possible tabs here

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<Tab>("skills");
  const [isPending, startTransition] = useTransition(); // Notice the order of the destructured array

  const handleTabChange = (id: Tab) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/About.jpg"
          alt=" My image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Mauris
            pellentesque erat in blandit luctus. Donec sollicitudin magna sed
            sem convallis, vel interdum est iaculis. Aenean in nulla velit.
            Praesent vel enim nec justo dapibus auctor. Nullam egestas, magna in
            porttitor lacinia, odio ante ullamcorper libero, non imperdiet augue
            enim sed eros.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
