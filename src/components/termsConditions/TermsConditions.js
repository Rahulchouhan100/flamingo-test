import React from "react";
import { Container } from "react-bootstrap";
import "./termsConditions.css";
const OlList = [
  {
    name: "Acceptance of Terms:",
    list: [
      `By accessing and using the Flamingo website and mobile applications, you agree to abide by these terms and conditions.`,
    ],
  },
  {
    name: "User Accounts:",
    list: [
      `Users must create an account to access certain features.
       Account information must be accurate and updated.`,
      `Keep login credentials secure and report any unauthorised access.`,
    ],
  },
  {
    name: "Property Bookings:",
    list: [
      `Customers can book PGs, hostels, co-living spaces, hotels, and resorts through our platform.`,
      `Payment options include portal transactions or direct payments at the property owner's place.`,
    ],
  },
  {
    name: `Communication:`,
    list: [
      ` Customers can communicate with property owners through provided channels post-booking.`,
    ],
  },
  {
    name: `Cancellation Policy:`,
    list: [
      `Cancellation features are available with associated fees for paid bookings.`,
      `Refunds are processed within 3 to 4 working days.
`,
    ],
  },
  {
    name: ` Property Owner Responsibilities:`,
    list: [
      `Property owners are responsible for accurate business information, room management, and pricing.`,
      `Timely acceptance of bookings, room allotment, and payment management are crucial.`,
    ],
  },
  {
    name: `Subscription and Renewal:`,
    list: [
      `Property owners subscribe to plans with integrated payment gateways.`,
      ` Renewal reminders are sent, and a grace period is provided.`,
    ],
  },
  {
    name: `Onboarding Process:`,
    list: [
      `Property owners can join through registration requests or direct onboarding as facilitated by the super admin.
`,
    ],
  },
  {
    name: `Data Security:`,
    list: [
      `Users' information is secured through encryption and secure protocols.`,
    ],
  },
  {
    name: `Offers and Advertisement:`,
    list: [
      `Property owners can post offers visible to customers during the booking process.`,
      `Super admin manages direct advertisements within the platform.`,
    ],
  },
  {
    name: `Compliance:`,
    list: [`Users agree to comply with all applicable laws and regulations.`],
  },
  {
    name: `Termination:`,
    list: [
      `Flamingo reserves the right to terminate accounts for non-compliance with these terms.`,
    ],
  },
  {
    name: `Modification of Terms:`,
    list: [
      `Flamingo may modify these terms, and users are encouraged to review them periodically.`,
    ],
  },

  {
    name: `Limitation of Liability:`,
    list: [
      `Flamingo is not liable for any direct, indirect, or consequential damages resulting from the use of our platform.
`,
    ],
  },
  {
    name: `Governing Law::`,
    list: [
      `These terms are governed by and construed in accordance with the laws of the jurisdiction where Flamingo operates.
`,
    ],
  },
  {
    name: `Contact Information::`,
    list: [
      `For any questions or concerns regarding these terms, contact us at `,
    ],
  },
];
const TermsConditions = () => {
  console.log(OlList, "OlList OlList");
  return (
    <section className="TermsConditions order_unorder py-5">
      <Container>
        <h4>Terms and Conditions:</h4>
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
        <b>[contact@flamingo.com](mailto:contact@flamingo.com).</b>
        <p>
          By using our platform, you acknowledge that you have read, understood,
          and agreed to these terms and conditions.
        </p>
      </Container>
    </section>
  );
};

export default TermsConditions;
