import { h } from 'preact';

const Contact: React.FC = () => {
  return (
    <section className="p-6 bg-neutral text-secondary min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <div className="flex flex-col items-center">
        <form className="w-full max-w-md bg-base-100 p-8 rounded-lg shadow-lg">
          <div className="form-control mb-4">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input id="name" type="text" placeholder="Your Name" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input id="email" type="email" placeholder="Your Email" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label htmlFor="message" className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea id="message" className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;