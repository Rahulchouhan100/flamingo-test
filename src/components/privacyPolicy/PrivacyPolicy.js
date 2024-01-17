import React from "react";
import { Container } from "react-bootstrap";
import "./privacyPolicy.css";
const OlList = [
  {
    name: "Introduction",
    list: [
      'This Privacy Policy outlines how Flamingo (referred to as "we," "us," or "our") collects, uses, and protects your personal information.',
    ],
  },
  {
    name: "Information We Collect:",
    list: [
      `We collect information such as your name, contact details, and payment 
      information when you use our website and mobile applications.`,
      `Property owners provide additional details for account setup and management.`,
    ],
  },
  {
    name: "How We Use Your Information:",
    list: [
      " Personal information is used for property bookings, payment processing, and communication between customers and property owners.",
      "Property owners' information is utilised for managing their business on our platform.",
      `Property owners' information is utilised for managing their business on our platform.
`,
    ],
  },
  {
    name: "Payment Transactions:",
    list: [
      "Secure payment gateways are integrated for direct transactions, ensuring the confidentiality and security of financial data.",
    ],
  },

  {
    name: "Email Processing",
    list: [
      "Automatic email processes are in place to send booking confirmations and relevant information to customers and property owners.",
    ],
  },

  {
    name: "Communication:",
    list: [
      "Customers can communicate with property owners through phone or WhatsApp after successful bookings.",
    ],
  },

  {
    name: "Booking Cancellation:",
    list: [
      "Cancellation features are provided with applicable fees for paid bookings. Refunds are processed within 3 to 4 working days.",
    ],
  },
  {
    name: "Property Owner Requests:",
    list: [
      "Property owners can register and manage their business requests through our web and mobile applications.",
    ],
  },
  {
    name: "Offers Section:",
    list: [
      "Special offers from property owners and Flamingo.com are displayed on the platform.",
    ],
  },
  {
    name: "Admin Features:",
    list: [
      "Super Admin Dashboard includes features such as customer and property owner data access, revenue analytics, employee management, and ticket management.",
    ],
  },
  {
    name: " Subscription and Renewal:",
    list: [
      "Property owners subscribe to plans with integrated payment gateways. Renewal reminders are sent, and a grace period is provided.",
    ],
  },
  {
    name: " Onboarding Process:",
    list: [
      `Property owners can join through registration requests or direct onboarding. Super admin creates login credentials.
`,
    ],
  },
  {
    name: "Data Security:",
    list: [
      `We prioritise the security of your information through encryption and secure protocols.`,
    ],
  },

  {
    name: "Analytics:",
    list: [
      ` Revenue analytics are performed on a day-wise, monthly-wise, yearly-wise, and city-wise basis.`,
    ],
  },
  {
    name: "Advertisement System:",
    list: [
      `Super admin manages direct advertisements within the platform.
`,
    ],
  },
  {
    name: "Compliance:",
    list: [
      `Our privacy practices comply with legal requirements and industry standards.`,
    ],
  },
];
const PrivacyPolicy = () => {
  console.log(OlList, "OlList OlList");
  return (
    <section className="privacyPolicy order_unorder py-5">
      <Container>
        <h4>Privacy Policy:</h4>
        <ol>
          {OlList.map((item) => {
            return (
              <>
                <li>
                  {item?.name}
                  <ul>
                    {item?.list.map((subItem) => {
                      return (
                        <>
                          <li>{subItem}</li>
                        </>
                      );
                    })}
                  </ul>
                </li>
              </>
            );
          })}
        </ol>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
