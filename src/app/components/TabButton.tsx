import React, { ReactNode } from 'react';

// Define the type for the props
interface TabButtonProps {
  active: boolean;
  selectTab: () => void; // Assuming selectTab is a function that takes no arguments
  children: ReactNode; // ReactNode allows for any type of React children
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white border-b border-purple-500" : 'text-[#ADB7BE]';
  
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
