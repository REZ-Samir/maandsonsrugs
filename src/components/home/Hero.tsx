import Image from "next/image";
import React from "react";
import homeData from "./json/Home.json";
import Link from "next/link";

interface HeroInterface {
  title: string;
  subtitle: string;
  bgImage: string;
  heroHighlight: {
    carpetImg?: string;
    carpetName: string;
    carpetType: string;
  }[];
}

function Hero() {
  const heroData: HeroInterface | undefined = homeData.hero;
  return (
    <section className=" h-[500px] md:h-dvh relative">
      <div
        className="w-full h-full absolute -z-10 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(102, 102, 102, .3)), url(${heroData.bgImage}) `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="home-hero-container">
        <h2 className="home-hero-title">{heroData.title}</h2>
        <h4 className="home-hero-subtitle">{heroData.subtitle}</h4>
        <div className="homer-hero-hover-card-wrapper">
          {heroData.heroHighlight.map((data, index) => (
            <Link key={index} href={"/rugs/one"}>
              <div className="group home-hero-hover-card">
                <Image
                  src={data.carpetImg ?? ""}
                  alt=""
                  className="home-hero-hover-card__image"
                  width={500}
                  height={500}
                />
                <div className="home-hero-hover-card__text">
                  <h4>{data.carpetName}</h4>
                  <p>{data.carpetType}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
