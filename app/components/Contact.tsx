export default function Contact() {
    return (
      <section
        id="contact"
        className="py-24 px-6 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>
  
        <p className="text-gray-400 mb-10">
          Interested in working together or have a question?
          Feel free to reach out.
        </p>
  
        <a
          href="mailto:your@email.com"
          className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Send Email
        </a>
      </section>
    );
  }