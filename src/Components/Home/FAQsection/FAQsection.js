import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQsection = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="text-gray-700 grid grid-cols-1 bg-[#F8FBFE] py-40">
      <div className=" w-3/6 mx-auto">
        <h1 className="text-4xl text-[#124265] text-center mb-10">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-gray-500 mb-10 text-center">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <Accordion open={open === 1} onClick={() => handleOpen(1)}>
          <AccordionHeader>
            <span className="bg-white hover:text-blue-500 text-md">
              <i class="fa-solid fa-circle-question text-blue-400"></i> What can
              I do with Material Tailwind?{" "}
              <i class="fa-solid fa-angle-down ml-48 hover:text-blue-500"></i>
            </span>{" "}
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} onClick={() => handleOpen(2)}>
          <AccordionHeader>
            <span className="bg-white hover:text-blue-500 text-md">
              <i class="fa-solid fa-circle-question text-blue-400"></i> What can
              I do with Material Tailwind?{" "}
              <i class="fa-solid fa-angle-down ml-48 hover:text-blue-500"></i>
            </span>{" "}
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} onClick={() => handleOpen(3)}>
          <AccordionHeader>
            <span className="bg-white hover:text-blue-500 text-md">
              <i class="fa-solid fa-circle-question text-blue-400"></i> What can
              I do with Material Tailwind?{" "}
              <i class="fa-solid fa-angle-down ml-48 hover:text-blue-500"></i>
            </span>{" "}
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} onClick={() => handleOpen(4)}>
          <AccordionHeader>
            <span className="bg-white hover:text-blue-500 text-md">
              <i class="fa-solid fa-circle-question text-blue-400"></i> What can
              I do with Material Tailwind?{" "}
              <i class="fa-solid fa-angle-down ml-48 hover:text-blue-500"></i>
            </span>{" "}
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} onClick={() => handleOpen(5)}>
          <AccordionHeader>
            <span className="bg-white hover:text-blue-500 text-md">
              <i class="fa-solid fa-circle-question text-blue-400"></i> What can
              I do with Material Tailwind?{" "}
              <i class="fa-solid fa-angle-down ml-48 hover:text-blue-500"></i>
            </span>{" "}
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsection;
