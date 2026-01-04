import Container from "../Shared/Container";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply browse our course catalog, click on the course you are interested in, and click the 'Enroll Now' button. You'll need to be logged in to complete the process.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes! Upon successfully completing a course and all its requirements, you will receive a digital certificate that you can showcase on your profile.",
  },
  {
    question: "Can I access the courses on mobile?",
    answer:
      "Absolutely. Our platform is fully responsive, meaning you can learn on the go from your smartphone, tablet, or laptop.",
  },
  {
    question: "Are the courses lifetime access?",
    answer:
      "Yes, once you enroll in a course, you have lifetime access to the course materials, including any future updates.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-base-100">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary font-bold tracking-wide uppercase mb-2">
              Common Questions
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-gray-600 mb-6">
              Find answers to common questions about our platform, courses, and
              pricing. Can't find what you're looking for? Contact our support.
            </p>
            <button className="btn btn-primary">Contact Support</button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-200 border border-base-300 rounded-lg"
              >
                <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;