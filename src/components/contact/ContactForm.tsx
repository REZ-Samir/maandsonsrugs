"use client";
import React, { FormEvent } from "react";
import { CustomSection } from "../common/CommonUtility";

function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Submitted Successfully!", data);

    alert("Form submitted successfully!");
    e.currentTarget.reset();
  };

  return (
    <CustomSection>
      <div className="max-w-screen-xl mx-auto ">
        <form onSubmit={handleSubmit} className="contact-form-wrapper">
          {/** Reusable Input Field Component */}
          {["First Name", "Last Name", "Phone Number", "Email"].map(
            (label, idx) => (
              <div key={idx}>
                <label
                  htmlFor={label.toLowerCase().replace(" ", "")}
                  className="contact-form-label"
                >
                  {label}
                </label>
                <input
                  type={label === "Email" ? "email" : "text"}
                  id={label.toLowerCase().replace(" ", "")}
                  name={label.toLowerCase().replace(" ", "")}
                  className="contact-form-input"
                />
              </div>
            )
          )}

          {/** Message Field */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="contact-form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="contact-form-textArea"
            ></textarea>
          </div>

          {/** Submit Button */}
          <div className="md:col-span-2">
            <button type="submit" className="contact-form-submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </CustomSection>
  );
}

export default ContactForm;
