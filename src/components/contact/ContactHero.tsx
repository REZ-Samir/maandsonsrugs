import React from "react";
import homeData from "../home/json/Home.json";

function ContactHero() {
  return (
    <section className="h-[500px] md:h-[calc(100vh-200px)] relative">
      <div
        className="w-full h-full absolute -z-10 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(102, 102, 102, .3)), url(${homeData.hero.bgImage}) `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="contact-hero-container">
        <h2 className="home-hero-title">
          {"Let’s Bring Your Vision to Life – Reach Out to Us!"}
        </h2>
        <h4 className="contact-hero-subtitle">
          {
            "Whether it’s a question, a custom request, or just a chat about styles, we’re here to help"
          }
        </h4>
      </div>
    </section>
  );
}

export default ContactHero;
