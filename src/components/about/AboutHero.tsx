import React from "react";
import homeData from "../home/json/Home.json";

function AboutHero() {
  return (
    <section className="h-[500px] md:h-dvh relative">
      <div
        className="w-full h-full absolute -z-10 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(102, 102, 102, .3)), url(${homeData.hero.bgImage}) `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-10/12 md:w-7/12 lg:w-4/12 bg-white p-5">
        <h2 className="text-2xl mb-5">Our History</h2>
        <p>
          Founded in 1997, with the belief that luxury is determined through
          respect for craftsmanship, community and innovative creation, The Rug
          Company is renowned for crafting the finest luxury rugs in the world.
          Taking a modern approach to age-old techniques, each collection
          continues to reinvent the notion of interior design.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
