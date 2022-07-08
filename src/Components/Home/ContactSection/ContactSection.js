import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
// import './ContactSection.css';
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import GoogleMap from "./GoogleMap/GoogleMap";

const ContactSection = () => {
  const form = useRef();
  const sendEmail = (e) => {
    const name = e?.target?.name?.value;
    const email = e?.target?.email?.value;
    const message = e?.target?.message?.value;
    console.log(name, email, message);

    if (
      !name ||
      !email ||
      !message ||
      !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
    ) {
      toast.error("Please give valid info!");
    } else {
      toast.success("Thank you, we will reply to your email within 12 hours!");
    }
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7mf71pq",
        "template_27r7boq",
        form.current,
        "8WjOhkzB5Rv7JRs02"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="custom_container mx-auto">
        <div>
          <h1 className="text-[#124265] text-center  font-bold text-3xl mt-4 uppercase">
            Contact
          </h1>
          <p className="text-center text-gray-400 md:w-10/12 container mx-auto my-4">
            Contact us if you want to buy our package or to know more about us.
            We will reply to your email 12 hours in advance.Contact us without
            any hesitation, we always try to keep the client satisfied.
          </p>
        </div>

        <div className="mx-3">
          <div className="mx-auto custom_container m-3">
            <div className="w-full">
              <GoogleMap />
            </div>
          </div>
        </div>

        <div className="custom_container mx-auto mt-5 p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="mt-7">
              <div className="my-6 flex">
                <div className="p-4 bg-[#edf4fa] flex items-center mr-4 rounded-xl">
                  <FontAwesomeIcon
                    className="text-2xl text-primary"
                    icon={faLocationDot}
                  />
                </div>
                <div>
                  <h1 className="text-accent font-semibold text-2xl">
                    Location:{" "}
                  </h1>
                  <p className="text-primary">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="my-6 flex">
                <div className="p-4 bg-[#edf4fa] flex items-center mr-4 rounded-xl">
                  <FontAwesomeIcon
                    className="text-xl text-primary"
                    icon={faEnvelope}
                  />
                </div>
                <div>
                  <h1 className="text-accent font-semibold text-2xl">Email:</h1>
                  <p className="text-primary">developerbuild62@gmail.com</p>
                </div>
              </div>
              <div className="my-6 flex">
                <div className="p-4 bg-[#edf4fa] flex items-center mr-4 rounded-xl">
                  <FontAwesomeIcon
                    className="text-xl text-primary"
                    icon={faPhone}
                  />
                </div>
                <div>
                  <h1 className="text-accent font-semibold text-2xl">Call:</h1>
                  <p className="text-primary">+8801998839126</p>
                </div>
              </div>
            </div>

            <div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mt-6 block md:none">
                  <div className="items-center md:flex">
                    <div className="w-full">
                      <input
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md outline-primary"
                        name="name"
                        type="text"
                        placeholder="name"
                        required
                      />
                    </div>

                    <div className="w-full md:mx-2 mt-4 md:mt-0">
                      <input
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md outline-primary "
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full mt-4">
                    <input
                      className="block w-full px-4 py-2 my-4 text-gray-700 bg-white border rounded-md outline-primary "
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      required
                    />
                    <textarea
                      className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md outline-primary focus:ring-opacity-40"
                      placeholder="message"
                      name="message"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button className="btn btn-primary rounded-2 text-white">
                      Send Message
                    </button>
                    <Toaster />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default ContactSection;
