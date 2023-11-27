import { createContext, useState } from "react";

const AddOnsContext = createContext();

export const AddOnsProvider = ({ children }) => {

  const [addOns, setAddOns] = useState([
    {
      id: 1,
      value: "Software Development",
      desc: "Software Development",
      price: 1,
    },
    {
      id: 2,
      value: "User Experience",
      desc: "User Experience",
      price: 2,
    },
    {
      id: 3,
      value: "Graphic Design",
      desc: "Graphic Design",
      price: 2,
    },
  ]);

  const [selectedAddOnsValue, setSelectedAddOnsValue] = useState([]);

  return (
    <AddOnsContext.Provider
      value={{
        addOns,
        setAddOns,
        selectedAddOnsValue,
        setSelectedAddOnsValue
      }}
    >
      {children}
    </AddOnsContext.Provider>
  );
};

export default AddOnsContext;
