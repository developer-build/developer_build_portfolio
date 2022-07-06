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


          {/* According */}
          <div className="flex justify-center pt-5">
            <div className="lg:w-10/12">
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="text-primary hover:text-[#2487cebd]">
                        Non consectetur a erat nam at lectus urna duis?
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-secondary">
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="text-primary hover:text-[#2487cebd]">
                        Feugiat scelerisque varius morbi enim nunc?
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-secondary">
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="text-primary hover:text-[#2487cebd]">
                        Dolor sit amet consectetur adipiscing elit?
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-secondary">
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="text-primary hover:text-[#2487cebd]">
                        Tempus quam pellentesque nec nam aliquam sem et tortor
                        consequat?
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-secondary">
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="text-primary hover:text-[#2487cebd]">
                        Tortor vitae purus faucibus ornare. Varius vel pharetra
                        vel turpis nunc eget lorem dolor?
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-secondary">
                      Laoreet sit amet cursus sit amet dictum sit amet justo.
                      Mauris vitae ultricies leo integer malesuada nunc vel.
                      Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                      eget lorem dolor sed. Ut venenatis tellus in metus
                      vulputate eu scelerisque.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
=======
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
