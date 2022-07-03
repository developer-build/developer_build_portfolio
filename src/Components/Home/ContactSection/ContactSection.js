import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './ContactSection.css';
import emailjs from 'emailjs-com'
import toast from "react-hot-toast";


const ContactSection = () => {
  const form = useRef();
  const sendEmail = (e) => {
    const name = e?.target?.name?.value;
    const email = e?.target?.email?.value;
    const message = e?.target?.message?.value;

    if ((!name || !email) || (!message || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))) {
      return toast.error('Please give valid info!');
    }
    else {
      toast.success('Thanks for your message!');
    }
    e.preventDefault();

    emailjs.sendForm('service_7mf71pq', 'template_27r7boq', form.current, '8WjOhkzB5Rv7JRs02')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  return <section>
    <div>
      <div className="custom_container mx-auto">
        <h1 className="text-center text-4xl font-semibold text-primary">Contact</h1>
        <p className="text-center text-gray-400 container mx-auto my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ullam dolore quae commodi repellendus quam eum delectus laborum doloribus unde quos placeat beatae in sequi optio. Tempora blanditiis praesentium</p>
      </div>

      <div className="mx-3">
        <div className="mx-auto custom_container m-3">
          <div className="w-full">
            <div style={{ width: "100%" }}><iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Mirpur,%20Dhaka%201216,%20Bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/farm-gps/">GPS Navigation</a></iframe></div>
          </div>
        </div>
      </div>

      <div className="custom_container mx-auto mt-5 p-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="mt-7">
            <div className="my-6 flex">
              <div className="p-4 bg-blue-200 flex items-center mr-4 rounded-2xl">
                <FontAwesomeIcon className="text-2xl text-primary" icon={faLocationDot} />
              </div>
              <div>
                <h1 className="text-sky-800 font-semibold text-2xl">Location: </h1>
                <p className="text-primary">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="my-6 flex">
              <div className="p-4 bg-blue-200 flex items-center mr-4 rounded-2xl">
                <FontAwesomeIcon className="text-xl text-primary" icon={faEnvelope} />
              </div>
              <div>
                <h1 className="text-sky-800 font-semibold text-2xl">Email:</h1>
                <p className="text-primary">developerbuild62@gmail.com</p>
              </div>
            </div>
            <div className="my-6 flex">
              <div className="p-4 bg-blue-200 flex items-center mr-4 rounded-2xl">
                <FontAwesomeIcon className="text-xl text-primary" icon={faPhone} />
              </div>
              <div>
                <h1 className="text-sky-800 font-semibold text-2xl">Call:</h1>
                <p className="text-primary">Mirpur, Dhaka 1216 Bangladesh</p>
              </div>
            </div>
          </div>

          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mt-6 block md:none">
                <div className="items-center md:flex">
                  <div className="w-full">
                    <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md outline-primary" name="name" type="text" placeholder="name" required />
                  </div>

                  <div className="w-full mx-2 mt-4 md:mt-0">
                    <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md outline-primary " name="email" type="email" placeholder="email" required />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <input className="block w-full px-4 py-2 my-4 text-gray-700 bg-white border rounded-md outline-primary " name="subject" type="text" placeholder="Subject" required />
                  <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md outline-primary focus:ring-opacity-40" placeholder="message" name="message" required></textarea>
                </div>

                <div className="flex justify-center mt-6">
                  <button className="btn btn-primary rounded-none text-white">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>;
  </section>
};

export default ContactSection;
