import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="section">
      <h1 className="text-center text-primary2 text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase">
        Contact
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div>
          <label className="font-bold text-primary2">FullName</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg mt-3"
            placeholder="Your Name*"
          />
        </div>

        <div>
          <label className="font-bold text-primary2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg mt-3"
            placeholder="Phone E-mail*"
          />
        </div>
        <div>
          <label className="font-bold text-primary2">Phone</label>
          <input
            type="number"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border mt-3 rounded-lg"
            placeholder="Your Phone"
          />
        </div>
        <div>
          <label className="font-bold text-primary2">Subject</label>
          <input
            type="text"
            id="text"
            name="Subject"
            className="w-full px-4 py-2 border mt-3 rounded-lg"
            placeholder="Subject"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="font-bold text-primary2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 border mt-3 rounded-lg"
            placeholder="Enter your message"
          />
        </div>

        <div className="col-span-1 md:col-span-2 mx-auto">
          <button className="bg-primary1 hover:bg-[#2A48CC] transition-all duration-500 rounded-md text-white px-6 py-5 rounded flex items-center gap-3">
            Send Message{" "}
            <span className="text-xl">
              <FiSend />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
